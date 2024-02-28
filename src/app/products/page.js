'use client'
import MiddleSection from "@/components/MiddleSection";
import PictureContainer from "@/components/PictureContainer";
import ProductsCheckbox from "@/components/ProductsCheckbox";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Products() {

  const params  = useSearchParams();
  const [selectedProducts, setSelectedProducts] = useState([]);

  // const products = {
  //   잼: ['딸기잼', '포도잼', '참다래잼', '블루베리잼', '사과잼'],
  //   포도음료: ['포도즙', '상큼한 포도'],
  //   과실차류: ['생강차', '모과차', '유자차'],
  //   농축액: ['배농축액', '사과농축액'],
  //   선물모음: ['잼선물모음', '차선물모음']
  // }

  const products = {
    잼: ['딸기잼_280g', '딸기잼_480g', '포도잼_280g', '참다래잼_280g', '블루베리잼_280g', '사과잼_280g'],
    포도음료: ['포도즙_120ml', '상큼한 포도_120ml'],
    과실차류: ['생강차_460g', '모과차_460g', '유자차_460g'],
    농축액: ['배농축액_480g', '사과농축액_480g'],
    선물모음: ['잼선물모음_280g', '차선물모음_460g']
  }
  
  return (
    <>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} />
      <div className="bg-white">
        <ProductsCheckbox params={params.get('params')} products={products} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
        <div className="grid grid-cols-4 max-w-screen-xl py-20 m-auto gap-[60px]">
        {          
          selectedProducts.map( (product, index) =>         
            <div key={index} className="w-[275px] h-auto text-center font-custom">    
              <Link href={`/products/${product}`}>
                <div className="overflow-hidden">
                  <Image src={`/products/${product}.jpg`} height={275} width={275} alt={product} className="transition hover:scale-105"/>
                </div>
              </Link>
                <div className="h-24">
                  <p>{product.split('_')[0]}</p>
                  <p>{product.split('_')[1]}</p>
                </div>
            </div>
          )
        }
        </div>
      </div>
    </>
  );
}