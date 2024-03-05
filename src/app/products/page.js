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

  const products = {
    잼: ['딸기잼_280g', '딸기잼_480g', '포도잼_280g', '참다래잼_280g', '블루베리잼_280g', '사과잼_280g'],
    포도음료: ['포도즙_120ml', '상큼한 포도_120ml'],
    과실차류: ['생강차_460g', '모과차_460g', '유자차_460g'],
    농축액: ['배농축액_480g', '사과농축액_480g'],
    선물모음: ['잼선물모음_280g', '차선물모음_460g']
  }

  const productNumber = {
    잼선물모음_280g : 9774007078,
    차선물모음_460g : 9774091854,
  }
  
  return (
    <>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} title={'제품소개'}/>
      <div className="bg-white">
        <ProductsCheckbox params={params.get('params')} products={products} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
        <div className="grid grid-cols-4 max-w-screen-xl py-20 m-auto gap-[60px]">
        {          
          selectedProducts.map( (product, index) =>         
            <div key={index} className="w-[275px] h-auto text-center font-custom">    
              <Link href={`${product.includes('선물') ? `https://smartstore.naver.com/okjamhwa/products/${productNumber[product]}` : `/products/${product}` }`}>
                <div className="overflow-hidden rounded-xl">
                  <Image src={`/products/${product}.jpg`} height={275} width={275} alt={product} className="transition hover:scale-105"/>
                </div>
              </Link>
                <div className="h-12">
                  <p>{product.split('_')[0]}</p>
                  <p className="font-light">{product.split('_')[1]}</p>
                </div>
            </div>
          )
        }
        </div>
      </div>
    </>
  );
}