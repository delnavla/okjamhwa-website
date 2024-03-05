'use client'
import * as d3 from "d3";
import {useRef, useEffect} from "react";

export default function OutLine() {
  const svgRef = useRef(null);

  useEffect(() => {            

    const width = 1280;
    const height = 600;

    const svg = d3.select(svgRef.current)
    .attr("width", width)
    .attr("height", height);

    const line = d3.line()
    .x(d => d.x) 
    .y(d => d.y); 

    const linesData  = [
      [
        { x: 250, y: 250 },
        { x: 350, y: 50 },
        { x: 700, y: 50 },
      ],
      [
        { x: 650, y: 200 },
        { x: 750, y: 100 },
        { x: 1150, y: 100 },
      ],
      [
        { x: 600, y: 450 },
        { x: 0 , y: 450 },
      ],
    ];

    svg.selectAll("path.line") 
      .data(linesData) 
      .enter() 
      .append("path") 
      .attr("class", "line") 
      .attr("d", line) 
      .attr("fill", "none")
      .attr("stroke", "black");

    }, []);

  return <svg ref={svgRef}/>
}