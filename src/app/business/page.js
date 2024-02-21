'use client'
import Header from "@/components/Header";
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
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

  return (
    <>
      <Header/>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} />
      <div className="bg-white">
        <MiddleSection array={['OEM 생산', '자체 생산']} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </>    
  );
};