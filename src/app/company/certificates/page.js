'use client'
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import Zoom from "@/components/Zoom";
import { useState } from "react";

export default function Certificate() {

  const certificate = {
    'HACCP 인증서':
    [
      { name: 'HACCP 인증서 1', path: '/certificate/HACCP1.png'},
      { name: 'HACCP 인증서 2', path: '/certificate/HACCP2.png'},
      { name: 'HACCP 인증서 3', path: '/certificate/HACCP3.png'},
    ],
    '친환경 가공식품 인증서':
    [
      { name: '무농약가공 인증서', path: '/certificate/무농약가공인증서.png'},
      { name: '유기가공 인증서', path: '/certificate/유기가공인증서.png'},
    ],
    '지정서 및 상':
    [
      { name: '예비사회적기업 지정서', path: '/certificate/예비사회적기업.png'},
      { name: '여성가족부 장관상', path: '/certificate/여가부표창패.png'},
    ],
  }

  const [activeMenu, setActiveMenu] = useState(Object.keys(certificate)[0]);

  return (
    <>
      <PictureContainer path={'middle_section/img1.jpg'} title={'회사소개'} />
      <div className="bg-white">
        <MiddleSection array={Object.keys(certificate)} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <div className="flex flex-col items-center py-20">
          <div className="w-full max-w-screen-xl flex justify-start border-b border-black">
            <h1 className="text-4xl font-custom m-4">{activeMenu}</h1>
          </div>
        <div className="w-full flex py-20 h-full flex-wrap max-w-screen-xl m-auto content-normal gap-32 justify-start">               
          {
            certificate[activeMenu].map( img => <Zoom key={img.name} img={img}/> )
          }
        </div>
        </div>
      </div>
    </>    
  );
};