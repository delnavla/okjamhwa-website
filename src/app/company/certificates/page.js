'use client'
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import Title from "@/components/Title";
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
        <div className="flex flex-col items-center py-10">
          <Title title={activeMenu}/>
        <div className="w-full pb-10 h-full flex-wrap max-w-screen-xl m-auto content-normal gap-32 justify-start hidden xl:flex">               
          {
            certificate[activeMenu].map( img => <Zoom key={img.name} img={img}/> )
          }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:hidden lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm md:gap-12 gap-6 sm:w-full w-10/12">
          {            
            certificate[activeMenu].map( (img, index) => (
                <div key={index} className="text-center font-custom">
                  <div className="border border-black">
                    <img src={img.path} alt={img.name}/>
                  </div>
                  {img.name}
                </div>
              )
            )
          }
        </div>
        </div>
      </div>
    </>    
  );
};