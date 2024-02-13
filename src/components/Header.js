'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Header({
  position = 'relative'
}) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const navMenus = {
    '회사소개': ['인사말', '조직도', '연혁', '비전', '인증서', '오시는 길'],
    '시설설비': ['시설안내', '설비안내'],
    '사업분야': ['OEM 생산', '자체 생산'],
    '제품소개': ['잼', '포도음료', '과실차류'],
    '고객센터': ['공지사항', '영상 게시판', '사진 게시판', '견적 문의', '견학 신청']
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`${position} top-0 w-full transition-all z-50 h-20 ${isScrolled || activeMenu ? 'bg-[#eae7e2]' : 'backdrop-blur-sm bg-gradient-to-b from-black/40 from-0% via-black/24 via-40% to-transparent to-100%'}`}
      onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(null)}   
    >    

      <div className="flex w-full h-full px-4 justify-between max-w-screen-xl xl:mx-auto">
        <div className={`flex items-center space-x-14 whitespace-nowrap font-pretendard font-bold ${isScrolled || activeMenu ? 'text-gray-700' : 'text-slate-50' }`}>
          <Link href='#'>
            <Image 
              src={`horizontalLogo2_${isScrolled || activeMenu ? 'black' : 'white'}.svg`}
              width={148}
              height={54}
              alt="logo"      
              priority={true}
            />
          </Link>

          {
            Object.entries(navMenus).map(([menu, subMenus], index) => (
              <li key={index} className='flex relative h-full items-center list-none text-lg'>
                <Link href='#' className='hover:text-red-600'>{menu}</Link>
                <ul className={`absolute top-full z-40 font-light text-base ${activeMenu ? 'h-20' : 'h-0 overflow-hidden' }`}>
                  {subMenus.map((subMenu, subIndex) => (
                      <li key={subIndex} className='py-2'>
                        <Link href='#' className='hover:text-red-600'>{subMenu}</Link>
                      </li>
                  ))} 
                </ul>
              </li>
            ))
          }

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
      <section className={`${position} w-full bg-[#eae7e2] transition-all duration-200 ease-out ${activeMenu ? 'h-64 ' :'h-0 overflow-hidden'}`}></section>
    </header>
  );
}
