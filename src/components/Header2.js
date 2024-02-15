'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import ChevronDown from '/public/chevron-down.svg';
import Menu from '/public/menu.svg';

export default function Header({
  position = 'relative',
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
    <header className={`${position} top-0 w-full transition-all z-50 h-24 ${isScrolled || activeMenu ? 'bg-[#fbf8f2]' : 'backdrop-blur-sm bg-gradient-to-b from-black/40 from-0% via-black/24 via-40% to-transparent to-100%'}`}
      onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(false)}   
    >    

      <div className="flex w-full h-full px-4 justify-between max-w-screen-xl xl:mx-auto">
        <div className={`flex items-center space-x-14 whitespace-nowrap font-pretendard font-bold ${isScrolled || activeMenu ? 'text-gray-700' : 'text-slate-50' }`}>
          <Link href='#'>
            <Image 
              src={`/horizontalLogo2_${isScrolled || activeMenu ? 'black' : 'white'}.svg`}
              width={148}
              height={54}
              alt="logo"      
              priority={true}
            />
          </Link>
          {
            Object.keys(navMenus).map((menu, index) => (
              <li key={index} className='flex relative h-full items-center list-none text-lg '
                onMouseEnter={() => setActiveMenu(menu)}>
                <Link href='#' className='flex hover:text-red-600 items-center'>{menu}<ChevronDown/></Link>
                <ul className={`bg-white w-40 border-solid border-[#494a52] rounded absolute top-3/4 font-light text-base shadow-[0_2px_9px_0px_rgba(0,0,0,.2)] left-1/2 -translate-x-1/2 ${activeMenu === menu ? 'border-2' : 'h-0 overflow-hidden border-0' }`}>  
                  <div className="bg-white w-[16px] h-[16px] border-2 border-solid border-[#494a52] rounded absolute top-0 content-none left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[0_2px_9px_0px_rgba(0,0,0,.2)]"/>
                  {                     
                    navMenus[menu].map((subMenu, subIndex) => (
                        <li key={subIndex} className='bg-white rounded relative py-2 text-center'>
                          <Link href='#' className='hover:text-red-600 block'>
                            {subMenu}
                          </Link>
                        </li> 
                    ))
                  }
                </ul>           
              </li>
            ))
          }
        </div>
        <div className='flex items-center'>

        <Menu/>
      </div>
      </div>
    </header>
  );
}
