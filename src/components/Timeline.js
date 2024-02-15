'use client'
import * as d3 from "d3";
import {useRef, useEffect} from "react";

export default function Timeline() {
  const svgRef = useRef(null);
  const data = [
    {
      date: 1994,
      event: ['포도밭에 비닐 천막을 치고 5명의 여성 농민이 모여 포도잼을 생산', '한살림 공급시작']        
    },
    {
      date: 1995,
      event: ['1,320m² 공장 용지 위에 297m² 공장 건물을 신축']
    },
    {
      date: 1996,
      event: ['옥잠화 영농조합 창립']
    },
    {
      date: 1997,
      event: ['자본금 1억원으로 출자금을 증자']
    },
    {
      date: 2000,
      event: ['딸기잼 진공 농축 기계 및 저온저장고 생산설비 도입']
    },
    {
      date: 2005,
      event: ['포도즙 가공설비 라인(7종) 도입']
    },
    {
      date: 2006,
      event: ['복숭아 병조림(백도, 황도) 생산 시작']
    },
    {
      date: 2007,
      event: ['모과차 생강차 생산']
    },
    {
      date: 2009,
      event: ['소규모 포도 클러스터 지원 사업으로 살균설비 및 포장설비 도입']
    },
    {
      date: 2011,
      event: ['공장리모델링준공', '특화품목 육성사업 지원사업으로 HACCP 시설 리모델링 및 과일잼 자동 충전라인 도입']
    },
    {
      date: 2013,
      event: ['소규모 HACCP 인증']
    },
    {
      date: 2015,
      event: ['농산물가공육성사업으로 스파우트 포장기, 컴프레셔, 증기보일러 도입']        
    },
    {
      date: 2016,
      event: ['포도 희석 음료 상큼한 포도 스파우트 포장 출시', '11월 29일 화재 발생(전소), 저온저장고 164.9m² 신축']        
    },
    {
      date: 2017,
      event: ['옥잠화 영농조합 이전 공장신축(567m²)', '자본금 2억 증자']        
    },
    {
      date: 2018,
      event: ['한살림햇빛발전소 6호', '소규모 HACCP 재인증(잼류, 과채 주스류, 과채 음료류)']
    },
    {
      date: 2020,
      event: ['유기(무농약)가공인증 9종']
    },
    {
      date: 2021,
      event: ['유기가공인증(2종), 무농약가공인증(7종), 냉동창고 신축(165m²)']
    },
    {
      date: 2022,
      event: ['여가부장관상 표창', '예비사회적기업지정']
    }
  ]
  useEffect(() => {            

    const width = 1500;
    const height = 1000;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 50;
    const marginLeft = 40;

    const y = d3.scaleLinear()
      .domain([data.at(-1).date, data[0].date])
      .range([height - marginBottom, marginTop]);

    const svg = d3.select(svgRef.current)
    .attr("width", width)
    .attr("height", height);

    svg.append("line")
      .attr("x1", width / 2)
      .attr("y1", 0 + marginTop)
      .attr("x2", width / 2)
      .attr("y2", height - marginBottom)
      .style("stroke", "black")
      .lower();

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", d => y(d.date) )
      .attr("r", 10)
      .style("fill", "white")
      .style("stroke", "black")
      .style("stroke-width", "1")

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d,i) => i % 2 == 0 ? width / 2 - 20 : width / 2 + 20 )
      .attr("y", d => y(d.date) + 5 )
      .text( d => d.date)
      .attr("text-anchor", (d,i) => i % 2 == 0 ? "end" : "start")
      .attr("font-family", "Pretendard")
      .attr("font-size", "16px")
      .attr("font-weight", "600");

    data.forEach((d, i) => {
    const eventText = svg.append("text")
      .attr("class", "eventLabel")
      .attr("x", i % 2 === 0 ? width / 2 - 20 : width / 2 + 20)
      .attr("y", y(d.date) + 20) 
      .attr("text-anchor", i % 2 === 0 ? "end" : "start");
      

      d.event.forEach((event, index) => {
        eventText.append("tspan")
          .attr("x", i % 2 === 0 ? width / 2 - 20 : width / 2 + 20) 
          .attr("dy", index === 0 ? 5 : 20) 
          .attr("text-anchor", i % 2 === 0 ? "end" : "start")
          .text(event)
          .attr("font-family", "Pretendard")
          .attr("font-size", "15px")
          .attr("font-weight", "200");
      });
    });
  }, []);

  return <svg ref={svgRef}></svg>;
}