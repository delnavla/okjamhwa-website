'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="sticky top-0 w-full h-20 transition-all duration-400 z-50"
      style={{
          background: isScrolled
            ? 'white'
            : 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.24) 40%, transparent 100%)'
        }}
    >
      <div className="flex w-full h-full px-4 justify-between max-w-screen-xl xl:mx-auto">
        <div className={`flex items-center space-x-7 whitespace-nowrap font-pretendard font-bold ${isScrolled ? 'text-gray-700' : 'text-slate-50' }`}>
          <Link href='#'>
            <Image 
              src={`horizontalLogo2_${isScrolled ? 'black' : 'white'}.svg`}
              width={148}
              height={54}
              alt="logo"      
              priority={true}
            />
          </Link>
          <Link href='#' className='hover:text-red-600'>회사소개</Link>
          <Link href='#' className='hover:text-red-600'>시설설비</Link>
          <Link href='#' className='hover:text-red-600'>사업분야</Link>
          <Link href='#' className='hover:text-red-600'>제품소개</Link>
          <Link href='#' className='hover:text-red-600'>고객센터</Link>
        </div>
        <div className='flex items-center'>

          <Image 
            src="menu.svg"
            width={40}
            height={40}
            alt="menu"      
          />
      </div>
      </div>
    </header>
  );
}
