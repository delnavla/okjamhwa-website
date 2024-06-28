'use client'
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import ChevronDown from '/public/chevron-down.svg';
import Menu from '/public/menu.svg';
import X from '/public/x.svg';
import { CSSTransition } from 'react-transition-group';
import { usePathname } from 'next/navigation';
import Shopping from '/public/shopping-bag-hand-bag-2--shopping-bag-purse-goods-item-products.svg'


export default function Header() {

  const pathname = usePathname()

  const nodeRef = useRef(null);
  const headerRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(false)
  const [submenu, setSubmenu] = useState(null)

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
      name: ['OEM 생산'],
      link: ['/business?params=OEM%20생산']
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

  const products = {
    잼: ['딸기잼_280g', '포도잼_280g', '참다래잼_280g', '블루베리잼_280g', '사과잼_280g'],
    포도음료: ['포도즙_120ml', '상큼한 포도_120ml'],
    과실차류: ['생강차_460g', '모과차_460g', '유자차_460g'],
    농축액: ['배농축액_480g', '사과농축액_480g'],
    선물모음: ['잼선물모음_280g', '차선물모음_460g']
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    function handleClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setToggleMenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };    
  }, []);

  const invert = isScrolled || activeMenu || !(pathname === '/')

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const toggleSubmenu = (menu) => {    
    if ( submenu === menu) {
      setSubmenu(null);
    } else {
      setSubmenu(menu);
    }
  }
  
  return (
    <>
      { pathname.split('/')[1] != 'admin' &&
        <>
          <header className={`${pathname === '/' ? 'sticky' : 'relative' } font-custom text-lg top-0 w-full z-10 h-24 hidden xl:block ${invert ? 'bg-white' : 'backdrop-blur-sm bg-gradient-to-b from-black/40 from-0% via-black/24 via-40% to-transparent to-100%'}`}
            onMouseEnter={() => setActiveMenu(true)}
            onMouseLeave={() => setActiveMenu(false)}   
          >    
            <div className={`flex relative z-[5] w-full ${invert ? 'bg-white' : ''} h-full px-4 justify-between mx-auto max-w-screen-xl`}>
              <div className={`flex items-center space-x-14 whitespace-nowrap  ${invert ? 'text-gray-700' : 'text-slate-50' }`}>
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
                    <li key={index} className={`flex relative h-full items-center list-none ${activeMenu === menu ? 'text-red-600 font-normal' : ''}`}
                      onMouseEnter={() => setActiveMenu(menu)}>
                      <Link href={`${ menu != '제품소개' ? navMenus[menu].link[0] : '#'}`} className='flex hover:text-red-600 font-semibold items-center' scroll={false}>{menu}<ChevronDown/></Link>
                      { menu != '제품소개' && 
                        <ul className={`bg-white w-40 border-solid border-[#494a52] absolute top-3/4 font-medium text-base shadow-[0_2px_9px_0px_rgba(0,0,0,.2)] left-1/2 -translate-x-1/2 ${activeMenu === menu ? 'border-[1px]' : 'h-0 overflow-hidden border-0' }`}>  
                          <div className="bg-white w-[16px] h-[16px] border-[1px] border-solid border-[#494a52] absolute top-0 content-none left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[0_2px_9px_0px_rgba(0,0,0,.2)]"/>
                          {                   
                            navMenus[menu].name.map((subMenu, subIndex) => (
                              <li key={subIndex} className='bg-white border-b relative py-2  text-center text-gray-700'>
                                <Link href={navMenus[menu].link[subIndex]} className='hover:text-red-600 block' scroll={false}>
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
                <Link href={"https://smartstore.naver.com/okjamhwa"}>
                  <Shopping width="28" height="28" viewBox="0 0 14 14" className={`${invert ? 'stroke-black' : 'stroke-white'}`}/>
                </Link>
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
                <ProductsNav navMenus={navMenus} products={products}/> 
              </div>
            </CSSTransition>
          </header>
          
          <header ref={headerRef} className='sticky relative top-0 w-full z-10 h-16 xl:hidden bg-white border-b font-custom'>    
            <div className='flex h-full relative justify-center items-center'>
              <Link href='/' scroll={false}>
                <Image 
                  src={`/horizontalLogo2_black.svg`}
                  width={100}
                  height={40}
                  alt="logo"      
                  priority={true}
                />
              </Link>
              <div className='absolute left-0 p-5 cursor-pointer' onClick={handleToggleMenu}>
                { toggleMenu ? <X className='pointer-events-none'/> : <Menu className='pointer-events-none'/> }
              </div>
              <Link href={"https://smartstore.naver.com/okjamhwa"} className='absolute right-0 p-5'>
                <Shopping width="24" height="24" viewBox="0 0 14 14" className='stroke-black inline'/>
              </Link>
            </div>
            
            <div className={`absolute left-0 w-80 top-16 h-screen bg-white transition-transform ${toggleMenu ? 'translate-x-0': '-translate-x-full'}`}>
              <ul className={`${activeMenu == '제품소개' ? 'hidden' : ''}`}>
                {
                  Object.keys(navMenus).map((menu, index) => (
                    <div key={index} >
                      <li className='border-b py-5 pl-7 cursor-pointer hover:text-red-600 ' onClick={() => toggleSubmenu(menu)}>
                        {menu} 
                      </li>      
                        { submenu === menu && 
                          <div className='border-b bg-slate-50 py-5 pl-12'>
                            <ul>
                              {
                                navMenus[submenu].name.map((menu, index) => 
                                  <li key={index} className='p-2 hover:text-red-600'>
                                    <Link 
                                      href={`${navMenus[submenu].link[index]}`}
                                      className='flex items-center' 
                                      scroll={false} 
                                      onClick={() => handleToggleMenu()}
                                    >
                                      {menu}
                                    </Link>
                                  </li>
                                )
                              }
                            </ul>
                          </div>
                        }             
                    </div>                          
                  ))
                }
              </ul>
            </div> 
          </header>
        </>
      }
    </>
  );
}

function ProductCategory({category, products, link}) {
  
  const [activeMenu, setActiveMenu] = useState(products[0]);

  return (
    <>
      <div className="font-custom">
        <div className="overflow-hidden rounded-xl">
          <Link href={link} scroll={false}>
            <Image src={`/products/${activeMenu}.jpg`} height={250} width={250} alt={activeMenu} className="cursor-pointer transition hover:scale-105 "/>
          </Link>
        </div>
        <div className="text-center font-bold py-2">
          <Link href={link} scroll={false}>
            <span className='px-1' style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #C9EC92 50%)'}}>
              {category}
            </span>
          </Link>
        </div>
        <ul className="leading-loose text-center font-medium text-base font-medium">
          {
            products.map((product, index) => (
              <Link href={`/products/${product}`} key={index} scroll={false}>
                <li className="hover:text-red-600 hover:font-medium hover:cursor-pointer"
                    onMouseOver={() => setActiveMenu(product)}
                    onMouseOut={() => setActiveMenu(product)}
                  >{product.split('_')[0]}</li>
              </Link>
            ))
          }
        </ul>
      </div>
    </>
  );
}

function ProductsNav({navMenus, products}){

  return (
    <div className="bg-white py-6 drop-shadow">
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
