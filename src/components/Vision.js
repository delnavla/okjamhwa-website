'use client'
import * as d3 from "d3";
import {useRef, useEffect} from "react";
import Logo from "/public/circularLogo_black.svg"

export default function Vision() {
  const svgRef = useRef(null);

  const data = {SMALL: 1, SIMPLE: 1, SAFETY:1, SLOWLY:1, SMILE:1}
  const content = {
    SMALL: '작은 것을 소중하게 생각합니다.',  
    SIMPLE: '소박하고 단순한 생산을 지향합니다.',
    SAFETY: '안전한 농산물로 검증된 원료만 사용합니다.', 
    SLOWLY: '느리지만 제대로 가는 길을 찾습니다.',
    SMILE: '웃으며 함께 일하는 공동체를 만들어 갑니다.'
  }
  
  useEffect(() => {            

    const width = 600,
        height = 600,
        margin = 120;

    const radius = Math.min(width, height) / 2 - margin

    const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width},${height/2})`);
        // .attr("transform", `translate(${width/2},${height/2})`);

    const color = d3.scaleOrdinal()
    .domain(Object.keys(data))
    // .range(["#b565a7", "#595ca1", "#88B04B", "#f0bf59", "#be3455"]);
    .range(['#fff'])
  
  
  const pie = d3.pie()
    .sort(null) 
    .value(d => d[1])
    .padAngle(0.05)
    .startAngle( Math.PI )
    .endAngle( 2 * Math.PI)
  
  const data_ready = pie(Object.entries(data))
  
  const arc = d3.arc()
    .innerRadius(radius * 0.9)       
    .outerRadius(radius * 1.3)
  
  const outerArc = d3.arc()
    .innerRadius(radius * 1.3)
    .outerRadius(radius * 1.5)
  
    svg
    .selectAll('allPolylines')
    .data(data_ready)
    .enter()
    .append('polyline')
    .attr('stroke', 'black')
    .style('fill', 'none')
    .attr('stroke-width', 1)
    .attr('points', function(d) {
      const posA = arc.centroid(d);  
      const posB = outerArc.centroid(d);  
      const posC = outerArc.centroid(d);  
      const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      posC[0] = radius * 1.4 * (midangle < Math.PI ? 1.1 : -1.1);       
      return [posA, posB, posC];
    });
  
    svg
    .selectAll('allLabels')
    .data(data_ready)
    .join('text')
      .text(d => content[d.data[0]]) 
      .attr('transform', function(d) {
          const pos = outerArc.centroid(d); 
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          pos[0] = radius * 1.45* (midangle < Math.PI ? 1.1 : -1.1); 
          return `translate(${pos})`;
      })
      .style('text-anchor', function(d) {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return (midangle < Math.PI ? 'start' : 'end'); 
      })
      .style('font-size', '16px')
      .style('font-family', 'BinggraeTaom')
      .style("font-weight", "400")
  
    svg
    .selectAll('allSlices')
    .data(data_ready)
    .join('path')
    .attr('d', arc)
    .attr('fill', d => color(d.data[0]))
    // .attr("stroke", "black")
    .style("stroke-width", "1px")
      .style("font-weight", "400")
  
  
    svg
    .selectAll('allSlices')
    .data(data_ready)
    .join('text') 
    .text(d => d.data[0]) 
    .attr("transform", d => "translate(" + arc.centroid(d) + ")")
    .style("text-anchor", "middle") 
    .style("font-size", "16px") 
    .style("font-weight", "400")
    .style("fill", "black")
    .style('font-family', 'BinggraeTaom')
  }, []);

  return (
  <>
    <div className="w-full max-w-screen-xl lg:scale-100 md:scale-75 md:block hidden"> 
      <div className="flex">
        <div className="relative">
          <svg ref={svgRef}/>
          <Logo className="absolute top-[100px] left-[450px] w-96 h-96" />
        </div>
      </div>
    </div>
    <div className="table md:hidden font-custom ">
      { 
        Object.keys(content).map((key, index) => 
          <div key={index} className="table-row">
            <p className="table-cell p-2">{key}</p>
            <p className="table-cell p-2">{content[key]}</p>
          </div>
        )
      }
    </div>
  </>
  )
}