'use client'
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import ChevronDown from '/public/chevron-down.svg';
import Menu from '/public/menu.svg';
import ProductsNav from './ProductsNav';
import { CSSTransition } from 'react-transition-group';
import { usePathname } from 'next/navigation';

export default function Header() {

  const pathname = usePathname()

  const nodeRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const navMenus = {
    '회사소개': {
      name: ['회사소개', '인증서'],
      link: ['/company/about', '/company/certificates']
    },
    '시설설비': {
      name: ['시설안내', '설비안내'],
      link: ['/facilities?params=시설안내', '/facilities?params=설비안내']
    },
    '사업분야': {
      name: ['OEM 생산', '자체 생산'],
      link: ['/business?params=OEM%20생산', '/business?params=자체%20생산']
    },
    '제품소개': {
      name: ['잼', '포도음료', '과실차류', '농축액', '선물모음'],
      link: ['/products?params=잼', '/products?params=포도음료', '/products?params=과실차류', '/products?params=농축액', '/products?params=선물모음']
    },
    '고객센터': {
      name: ['공지사항', '사진 게시판', '문의'],
      link: ['/support/notice', '/support/board', '/support/inquiry']
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const invert = isScrolled || activeMenu || !(pathname === '/')

  return (
    <>
      { pathname.split('/')[1] != 'admin' &&
        <header className={`${pathname === '/' ? 'sticky' : 'relative' } top-0 w-full z-10 h-24 ${invert ? 'bg-white' : 'backdrop-blur-sm bg-gradient-to-b from-black/40 from-0% via-black/24 via-40% to-transparent to-100%'}`}
          onMouseEnter={() => setActiveMenu(true)}
          onMouseLeave={() => setActiveMenu(false)}   
        >    
          <div className={`flex relative z-[5] w-full ${invert ? 'bg-white' : ''} h-full px-4 justify-between max-w-screen-xl xl:mx-auto`}>
            <div className={`flex items-center space-x-14 whitespace-nowrap font-custom font-light ${invert ? 'text-gray-700' : 'text-slate-50' }`}>
              <Link href='/' scroll={false}>
                <Image 
                  src={`/horizontalLogo2_${invert ? 'black' : 'white'}.svg`}
                  width={148}
                  height={54}
                  alt="logo"      
                  priority={true}
                />
              </Link>
              {
                Object.keys(navMenus).map((menu, index) => (
                  <li key={index} className={`flex relative h-full items-center list-none text-lg  ${activeMenu === menu ? 'text-red-600 font-normal' : ''}`}
                    onMouseEnter={() => setActiveMenu(menu)}>
                    <Link href={`${ menu != '제품소개' ? navMenus[menu].link[0] : '#'}`} className='flex hover:text-red-600 items-center' scroll={false}>{menu}<ChevronDown/></Link>
                    { menu != '제품소개' && 
                      <ul className={`bg-white w-40 border-solid border-[#494a52] absolute top-3/4 font-light text-base shadow-[0_2px_9px_0px_rgba(0,0,0,.2)] left-1/2 -translate-x-1/2 ${activeMenu === menu ? 'border-[1px]' : 'h-0 overflow-hidden border-0' }`}>  
                        <div className="bg-white w-[16px] h-[16px] border-[1px] border-solid border-[#494a52] absolute top-0 content-none left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[0_2px_9px_0px_rgba(0,0,0,.2)]"/>
                        {                   
                          navMenus[menu].name.map((subMenu, subIndex) => (
                            <li key={subIndex} className='bg-white border-b relative py-2 font-light text-center text-gray-700'>
                                <Link href={navMenus[menu].link[subIndex]} className='hover:text-red-600 hover:font-normal block' scroll={false}>
                                  {subMenu}
                                </Link>
                            </li> 
                          ))
                        }
                      </ul>           
                    }
                  </li>
                ))
              }
            </div>
            <div className='flex items-center'>
              <Menu/>
            </div>
          </div>

          <CSSTransition
            nodeRef={nodeRef} 
            in={activeMenu === "제품소개"}
            timeout={300}
            classNames="slide-down"
            unmountOnExit   
          >
            <div ref={nodeRef}>
              <ProductsNav navMenus={navMenus}/> 
            </div>
          </CSSTransition>

        </header>
      }
    </>
  );
}
