'use client'
import * as d3 from "d3";
import {useRef, useEffect, useState} from "react";

export default function GeoContainer({
  // width = 350,
  // height = 350,
  width = 500,
  height = 400,
  // marginTop = 20,
  // marginRight = 20,
  // marginBottom = 30,
  // marginLeft = 40
}) {

  const [screenSize, setScreenSize] = useState(false);
  const [dimensions, setDimensions] = useState({ width: width, height: height })

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 768;
      setScreenSize(isLargeScreen);

      if (isLargeScreen) {
        setDimensions({ width: 500, height: 400 }); 
      } else {
        setDimensions({ width: 350, height: 280 }); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const projection = d3.geoMercator()
      .scale(1)
      .translate([0, 0]);
  
    const path = d3.geoPath().projection(projection);
    
    d3.json("/Yeongdong.geojson").then(function(geojson) {
      const bounds = path.bounds(geojson);
      const widthScale = (bounds[1][0] - bounds[0][0]) / svg.attr("width");
      const heightScale = (bounds[1][1] - bounds[0][1]) / svg.attr("height");
      const scale = 1 / Math.max(widthScale, heightScale);
      const translate = [
        (svg.attr("width") - scale * (bounds[1][0] + bounds[0][0])) / 2,
        (svg.attr("height") - scale * (bounds[1][1] + bounds[0][1])) / 2
      ];
      projection.scale(scale).translate(translate);
    
      svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", d => d.properties.EMD_ENG_NM === 'Simcheon-myeon' ? '#81cc45' : 'lightgray')
        .attr("stroke", "white")
        .attr("stroke-width", 2);
    
      svg.selectAll("text")
        .data(geojson.features)
        .enter().append("text")
        .attr("x", d => path.centroid(d)[0])
        .attr("y", d => path.centroid(d)[1])
        .attr("text-anchor", "middle")
        .text(d => d.properties.EMD_KOR_NM)
        .attr("fill", "white")
        .attr("font-family", "BinggraeTaom")
        .attr("font-size", "15px")
        .attr("font-weight", "600");
    });
  }, []);

  return (
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height}/>
  );
}