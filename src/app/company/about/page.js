'use client'
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import Timeline from "@/components/Timeline";
import Vision from "@/components/Vision";
import Script from "next/script";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function Greeting() {
  return (
  <div className="whitespace-pre text-center font-custom font-light">
    <p>옥잠화는 순백의 깨끗함으로 아름다운 향기를 냅니다.</p><br/>
    <p>옥잠화 영농 조합은 사람과 자연의 조화로움을 꿈꾸는</p><br/>
    <p className="font-normal">친환경 농산물 가공 전문업체입니다.</p><br/>
    <p>조금 느리고 소박하더라도 안전한 먹거리를 생산하여</p><br/>
    <p>농촌의 생산자와 도시 소비자를 물픔으로 이어주는</p><br/>
    <p className="font-normal">든든한 연결고리가 됩니다.</p><br/>
    <p>생명과 평화의 가치를 우선하며 함께 일하는</p><br/>
    <p className="font-normal">모두가 꽃길을 걷는 공동체를 만들어 갑니다.</p>
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
        return <KakaoMap/>;
    }
  }

  return (
    <>
      <Script
        type="text/javascript" 
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false`}
      />
      <PictureContainer path={'middle_section/img1.jpg'} title={'메뉴에 대한 설명'} content={'하고싶은 말'}/>
      
      <div className="bg-white ">
        <MiddleSection array={['인사말', '비전', '연혁', '오시는 길']} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <div className="flex flex-col items-center py-24">
          {selectMenu()}
        </div>
      </div>
    </>    
  );
};

function KakaoMap() {
  return (
    <div className="flex justify-center h-full w-full">
      <Map 
        center={{
          lat: 36.213663,
          lng: 127.683838,
        }}
        className="max-w-screen-lg w-full aspect-[4/3]"
        level={3} 
      >
        <MapMarker 
          position={{
            lat: 36.213663,
            lng: 127.683838,
          }}
        >
          <div className="p-1 mx-1">
            <a
              href="https://kko.to/mANDuAJY15"
              target="_blank"
              rel="noreferrer"
              className="font-custom"            
            >
            옥잠화영농조합법인
            </a>
          </div>
      </MapMarker>
    </Map>
    </div>

  )
}