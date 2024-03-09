'use client'
import Link from 'next/link';
import Right from '/public/chevron-right.svg';
import Shopping from '/public/shopping-bag-hand-bag-2--shopping-bag-purse-goods-item-products.svg'
import { useEffect, useState } from "react";

export default function ProductsCheckbox({params, products, selectedProducts, setSelectedProducts }) {

  const [checkedState, setCheckedState] = useState({
    잼: false,
    포도음료: false,
    과실차류: false,
    농축액: false,
    선물모음: false,
  });

  // console.log(params, products)

  const handleCheckboxChange = (e) => {

    const { name, checked } = e.target;
    
    setCheckedState({
      ...checkedState,
      [name]: checked,
    })

  };

  useEffect(() => {
    const falseChecked = Object.keys(checkedState).reduce((acc, key) => {
      acc[key] = false; 
      return acc;
    }, {});

    setCheckedState({
      ...falseChecked,
      [params]: true,
    })

  }, [params]); 

  useEffect(()=> {
    if (selectedProducts.length === 0) {
      setSelectedProducts(Object.values(products).flat())
    }
  }, [selectedProducts]);

  useEffect(()=> {

    const selectedArray = Object.keys(checkedState)
      .filter(key => checkedState[key] === true)
      .reduce( (acc, key) => {
      if (products[key] && Array.isArray(products[key])) {
        return [...acc, ...products[key]]
      } else {
        return acc
      }
    }, []);
    setSelectedProducts(selectedArray)  

  }, [checkedState]);

  return (
    <div className="border-b-[1px] border-black h-16 w-full ">
      <div className="flex justify-between items-center  xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto h-full   ">
        <div className="flex flex-wrap items-center sm:space-x-6 h-full">
          {Object.keys(products).map((key) => (
            <label key={key} className="flex items-center select-none cursor-pointer font-custom sm:px-0 px-2">
              <input
                type="checkbox"
                name={key} 
                checked={checkedState[key]} 
                onChange={handleCheckboxChange}     
                className="w-5 h-5 mr-1 rounded-sm border-black border cursor-pointer checked:accent-red-500 checked:border-none"             
              />
              {key}
            </label>
          ))}
        </div>
        <Link href='https://smartstore.naver.com/okjamhwa'>
          <div className="flex justify-center items-center h-12 sm:w-36 w-16 border border-black border-1 rounded-lg mr-2">
            <div className="flex justify-center items-center font-custom">
              <p className="hidden sm:block">스토어 바로가기</p>
              <Shopping width="20" height="20" viewBox="0 0 14 14" className='stroke-black block sm:hidden'/>
              <Right className="stroke-black stroke-1"/>              
            </div>
          </div>
        </Link>         
      </div>
    </div>
  )
}