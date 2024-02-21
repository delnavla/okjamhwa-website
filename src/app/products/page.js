'use client'
import Header from "@/components/Header";
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Products() {

  const params  = useSearchParams();

  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    if (params.get('params')) {
      setActiveMenu(params.get('params'))
    }
  }, [params]);

  console.log(activeMenu)

  return (
    <>
      <Header/>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} />
      <div className="bg-white">
        <MiddleSection array={['잼', '포도음료', '과실차류', '농축액', '선물모음']} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </>
  );
}