'use client'
import * as d3 from "d3";
import {useRef, useEffect} from "react";

export default function GeoContainer({
  width = 600,
  height = 600,
  // marginTop = 20,
  // marginRight = 20,
  // marginBottom = 30,
  // marginLeft = 40
}) {

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
        .attr("fill", d => d.properties.EMD_ENG_NM === 'Simcheon-myeon' ? 'forestgreen' : 'lightgray')
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
        .attr("font-family", "Pretendard")
        .attr("font-size", "16px")
        .attr("font-weight", "600");
    });
  }, []);

  return (
    <div className="flex justify-center my-10 ">
      <svg ref={svgRef} width={width} height={height}/>
    </div>
  );
}