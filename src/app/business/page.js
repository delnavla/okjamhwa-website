'use client'
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Business() {
    const params  = useSearchParams();

    const [activeMenu, setActiveMenu] = useState('');

    useEffect(() => {
      if (params.get('params')) {
        setActiveMenu(params.get('params'))
      }
    }, [params]);
  
    const oemProducts = ['딸기잼_280g', '딸기잼_480g', '포도잼_280g', '참다래잼_280g', '블루베리잼_280g', '사과잼_280g',
      '포도즙_120ml', '상큼한 포도_120ml', '생강차_460g', '모과차_460g', '배농축액_480g', '사과농축액_480g']

    return (
      <>
        <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} title={'사업분야'}/>
        <div className="bg-white pb-20">
          <MiddleSection array={['OEM 생산']} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <div className="flex flex-col items-center py-20">
            <div className="w-full max-w-screen-xl flex justify-start border-b border-black mb-10">
              <h1 className="text-4xl font-custom m-4">{activeMenu}</h1>
            </div>
            <div className="grid grid-cols-4 max-w-screen-xl py-20 m-auto gap-[60px]">
            {          
              oemProducts.map( (product, index) =>         
                <div key={index} className="w-[275px] h-auto text-center font-custom">    
                      <Image src={`/OEM/한살림_${product}.jpg`} height={275} width={275} alt={product} className="rounded-xl"/>
                    <div className="h-12">
                      <p>{product.split('_')[0]}</p>
                      <p className="font-light">{product.split('_')[1]}</p>
                    </div>
                </div>
                
              )
            }
            </div>
          </div>
          <div className="w-full max-w-screen-xl flex justify-start border-b border-black mb-10 m-auto">
            <h1 className="text-4xl font-custom m-4">홍보 영상</h1>
          </div>
          <div className="flex max-w-screen-xl m-auto justify-between">
            <iframe 
              width="600" 
              height="auto" 
              src="https://www.youtube.com/embed/4qHknA_HPgQ?si=sZzGSnMxJAALnijP" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="aspect-video"
            >            
            </iframe>
            <iframe 
              width="600" 
              height="auto" 
              src="https://www.youtube.com/embed/V-5YNz-DzSA?si=8sw8Q_FH62Q2BjZP" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="aspect-video"
            >            
            </iframe>
          </div>
        </div>
      </>
    );
  }