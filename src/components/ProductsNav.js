'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

function ProductCategory({category, products, link}) {
  
  const [activeMenu, setActiveMenu] = useState(products[0]);

  return (
    <>
      <div>
        <Image src={`/products/${category}/${activeMenu}.jpg`} height={250} width={250} alt={activeMenu} />
        <div className="text-center font-custom font-medium py-2">
          <Link href={link}>
            {category}
          </Link>
        </div>
        <ul className="leading-loose text-center font-custom font-light">
          {
            products.map((product, index) => {
              return <li key={index} className="hover:text-red-600 hover:font-normal hover:cursor-pointer"
                  onMouseOver={() => setActiveMenu(product)}
                  onMouseOut={() => setActiveMenu(product)}
                >{product}</li>
            })
          }
        </ul>
      </div>
    </>
  );
}

export default function ProductsNav({navMenus}){

  const products = {
    잼: ['딸기잼', '포도잼', '참다래잼', '블루베리잼', '사과잼'],
    포도음료: ['포도즙', '상큼한 포도'],
    과실차류: ['생강차', '모과차', '유자차'],
    농축액: ['배농축액', '사과농축액'],
    선물모음: ['잼선물모음', '차선물모음']
  }

  return (
    <div className="bg-white py-6">
      <div className="flex w-full justify-center space-x-16 max-w-screen-xl m-auto"> 
        {
          Object.keys(products).map( (category, index) => (
            <ProductCategory key={index} category={category} products={products[category]} link={`${navMenus['제품소개'].link[index]}`}/>
          ))
        }
      </div>
    </div>
  );
}
