'use client'
import Header from "@/components/Header";
import PictureContainer from "@/components/PictureContainer";
import Image from "next/image";
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

  const certiArray = Object.keys(certificate)
  const [activeMenu, setActiveMenu] = useState(certiArray[0]);

  return (
    <>
      <Header/>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} />
      <div className="border-y-[1px] border-black h-16 w-full ">
        <div className="flex max-w-screen-xl m-auto items-center h-full">
          {
            certiArray.map( (certi,i) => 
              <div key={i} className={`w-44 border-x-[1px] border-black font-custom text-center even:border-x-0 cursor-pointer ${certi === activeMenu ? 'text-red-600' : 'font-light' }`}
                onClick={() => setActiveMenu(certiArray[i])}>
                {certi}
              </div>
            )          
          }          
        </div>
      </div>
      <div className="flex py-20 h-full items-start flex-wrap max-w-screen-xl m-auto content-normal gap-40 justify-start">
        {
          certificate[activeMenu].map( (d, index) => 
            <div className="font-custom text-center font-light" key={index}>
              <Image className="border border-black cursor-zoom-in" width={300} height={300} src={d.path} alt={d.name}/>
              {d.name}
            </div>
          )
        }
      </div>
    </>    
  );
};