'use client'
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import Timeline from "@/components/Timeline";
import Title from "@/components/Title";
import Vision from "@/components/Vision";
import Script from "next/script";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function Greeting() {
  return (
  <div className="flex lg:flex-row lg:space-x-20 flex-col lg:space-y-0 space-y-10 sm:scale-100 scale-90 ">
    <div className="flex flex-col justify-center whitespace-pre text-center font-custom ">
      <p>옥잠화는 순백의 깨끗함으로 아름다운 향기를 냅니다.</p><br/>
      <p>옥잠화 영농 조합은 자연과 사람의 조화로움을 꿈꾸는</p><br/>
      <div className="flex justify-center"><p className="font-bold" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, #81cc45 80%)'}}>친환경 농산물 가공 전문업체입니다.</p></div><br/><br/>
      <p>조금 느리고 소박하더라도 안전한 먹거리를 생산하여</p><br/>
      <p>농촌의 생산자와 도시 소비자를 물픔으로 이어주는</p><br/>
      <div className="flex justify-center"><p className="font-bold" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, #81cc45 80%)'}}>든든한 연결고리가 됩니다.</p></div><br/><br/>
      <p>생명과 평화의 가치를 우선하며 함께 일하는</p><br/>
      <div className="flex justify-center"><p className="font-bold" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, #81cc45 80%)'}}>모두가 꽃길을 걷는 공동체를 만들어 갑니다.</p></div>
    </div>
    <img 
      src="/okjamhwa_draw.png" 
      alt="drawing okjamhwa"
      className="w-[600px] h-auto border"
    />
  </div>
  ) 
}

export default function History() {
  
  const [activeMenu, setActiveMenu] = useState('인사말');

  const selectMenu = () => {
    switch (activeMenu) {
      case '인사말':
        return <Greeting/>;
      case '비전':
        return <Vision/>;
      case '연혁':
        return <Timeline/>;
      case '오시는 길':
        return <Location/>;
    }
  }

  return (
    <>
      <Script
        type="text/javascript" 
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false`}
      />
      <PictureContainer path={'middle_section/img1.jpg'} title={'회사소개'} />
      
      <div className="bg-white">
        <MiddleSection array={['인사말', '비전', '연혁', '오시는 길']} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <div className="flex flex-col items-center py-10">
          <Title title={activeMenu === '비전' ? '비전 (5S)' : activeMenu}/>
          {selectMenu()}
        </div>
      </div>
    </>    
  );
};

function Location() {
  return (

    <div className="flex items-center h-full w-full font-custom xl:max-w-screen-xl xl:flex-row lg:space-x-10 flex-col space-y-10 sm:scale-100 scale-90">

      <Map 
        center={{
          lat: 36.213663,
          lng: 127.683838,
        }}
        className="md:max-w-screen-md sm:max-w-screen-sm w-full aspect-video"
        level={4} 
      >
        <MapMarker 
          position={{
            lat: 36.213663,
            lng: 127.683838,
          }}
        >
          <div className="p-1">
            <a
              href="https://kko.to/mANDuAJY15"
              target="_blank"
              rel="noreferrer"
              className="font-custom font-bold text-base"            
            >
            옥잠화영농조합법인
            </a>
          </div>
      </MapMarker>
    </Map>

    <div className="flex flex-col">
        <h2 className="text-lg mb-1 font-semibold">주소</h2>
        <h3 className="mb-4">충북 영동군 심천면 옥계폭포길 98-12</h3>
        <h2 className="text-lg mb-1 font-semibold">전화</h2>
        <h3 className="mb-4">042-742-0036</h3>
        <h2 className="text-lg mb-1 font-semibold">팩스</h2>
        <h3 className="mb-4">043-742-6522</h3>
      </div>
    </div>

  )
}