'use client'
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import Title from "@/components/Title";
import Zoom from "@/components/Zoom";
import Image from "next/image";
import { useState } from "react";

export default function Business({ searchParams }) {

    const [activeMenu, setActiveMenu] = useState(searchParams.params);
  
    const oemProducts = ['딸기잼_280g', '딸기잼_480g', '포도잼_280g', '참다래잼_280g', '블루베리잼_280g', '사과잼_280g',
      '포도즙_120ml', '상큼한 포도_120ml', '생강차_460g', '모과차_460g', '배농축액_480g', '사과농축액_480g']

    const oemBulk = [
      { name: '딸기퓨레 15kg(무농약)', path: "/OEM/딸기퓨레_15kg_무농약.jpg"},
      { name: '딸기퓨레 15kg(유기)', path: "/OEM/딸기퓨레_15kg_유기.jpg"},
      { name: '옥잠화 냉동포도즙 12kg(유기)', path: '/OEM/옥잠화_냉동포도즙_12kg_유기.jpg'},
      { name: '포도즙 15kg(무농약)', path: '/OEM/포도즙_15kg_무농약.jpg'},
      { name: '한살림 딸기잼 15kg(무농약)', path: "/OEM/한살림_딸기잼_15kg_무농약.jpg"},
    ]

    return (
      <>
        <PictureContainer path={'middle_section/img3.jpg'} title={'사업분야'}/>
        <div className="bg-white pb-20">
          <MiddleSection array={['OEM 생산']} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <div className="flex flex-col items-center py-10">
            <Title title={'OEM 대용량'}/>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto gap-[60px] mb-10">
            {
              oemBulk.map( (product, index) =>         
                <div key={index} className="w-[275px] h-auto text-center font-custom">    
                  <Zoom img={product} />
                </div>
              )              
            }
            </div>
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 sm:max-w-screen-sm gap-[20px]">
            {          
              oemBulk.map( (product, index) =>         
                <div key={index} className="w-[275px] h-auto text-center font-custom">    
                  <Image src={`${product.path}`} height={275} width={275} alt={product} className="rounded-xl"/>
                  <div className="h-12">
                    <p>{product.name}</p>
                  </div>
                </div>                
              )
            }
            </div>
            <Title title={'OEM 제품'}/>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto gap-[60px] gap-5 px-5">
            {          
              oemProducts.map( (product, index) =>         
                <div key={index} className="sm:w-[275px] w-auto h-auto text-center font-custom">    
                  <Image src={`/OEM/한살림_${product}.jpg`} height={275} width={275} alt={product} className="rounded-xl"/>
                  <div className="h-12">
                    <p>{product.split('_')[0]}</p>
                    <p className="font-light">{product.split('_')[1]}</p>
                  </div>
                </div>                
              )
            }
            </div>
            <Title title={'홍보 영상'}/>
            <div className="flex flex-col xl:flex-row xl:max-w-screen-xl gap-[60px]">
              <iframe 
                width="auto" 
                height="auto" 
                src="https://www.youtube.com/embed/4qHknA_HPgQ?si=sZzGSnMxJAALnijP" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="aspect-video md:w-[620px]"
              >            
              </iframe>
              <iframe 
                width="auto" 
                height="auto" 
                src="https://www.youtube.com/embed/V-5YNz-DzSA?si=8sw8Q_FH62Q2BjZP" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="aspect-video sm:w-[620px] w-auto"
              >            
              </iframe>
            </div>     
          </div>
        </div>
      </>
    );
  }