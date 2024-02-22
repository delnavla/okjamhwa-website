'use client'

import { useEffect, useState } from "react";

export default function ProductsCheckbox({params, products, selectedProducts, setSelectedProducts }) {

  const [checkedState, setCheckedState] = useState({
    잼: false,
    포도음료: false,
    과실차류: false,
    농축액: false,
    선물모음: false,
  });

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
      return [...acc, ...products[key]]
    }, []);
    setSelectedProducts(selectedArray)  

  }, [checkedState]);

  return (
    <div className="border-y-[1px] border-black h-16 w-full  ">
      <div className="flex max-w-screen-xl m-auto items-center h-full space-x-6">
        {Object.keys(products).map((key) => (
          <label key={key} className="flex items-center select-none cursor-pointer font-custom">
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
    </div>
  )
}