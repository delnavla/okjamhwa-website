'use client'
import { useEffect, useRef, useState } from 'react';
import FullScreen from '/public/interface-arrows-expand-3--expand-smaller-retract-bigger-big-small-diagonal.svg';
import Left from '/public/chevron-left.svg';
import Right from '/public/chevron-right.svg';
import Image from 'next/image';

export default function Photo({title, files}) {

  const scrollAmount = 500; 
  const [hasScroll, setHasScroll] = useState(false);
  const photoRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const scroll = (direction) => {
    if (photoRef.current) {
      const currentScroll = photoRef.current.scrollLeft;
      const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      photoRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setHasScroll(photoRef.current.scrollWidth > photoRef.current.clientWidth);    
  }, []);

  const startDrag = (e) => {
    setIsDrag(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  };

  const stopDrag = () => {
    setIsDrag(false)
  };

  const onDrag = (e) => {
    if (!isDrag) return
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    e.currentTarget.scrollLeft = scrollLeft - (x - startX) * 0.4;
  }

  return (
      <div className="my-24">

        <div className="flex absolute z-[5] border-[1px] border-black w-28 h-16 -translate-y-1/2 bg-white font-custom justify-center items-center z-10 ">
          {title}
        </div>

        <div className='relative w-full h-full'>
          { hasScroll &&
          <button onClick={() => scroll('left')} className="absolute z-[5] left-0 h-full group" >
            <Left width="72" height="72" viewBox="0 0 24 24" className="stroke-white stroke-1 drop-shadow-md opacity-70 group-hover:opacity-100" />
          </button>
          }
          <div 
          ref={photoRef} 

          onMouseDown={startDrag}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
          onMouseMove={onDrag}

          className={`relative flex max-w-screen-xl overflow-x-scroll scrollbar-hide ${  hasScroll ? 'cursor-grab' : ''}`}>
          {
            files.map((img, index) => (
              <div key={index}>             
                <div  className={`relative min-h-80 min-w-80 border-[1px] border-black cursor-pointer group ${index === files.length - 1 ? 'mr-0' : 'mr-4' }`}>
                  <Image 
                    src={`/${title}/${img}`}
                    alt={img}
                    fill
                    sizes="320px"                  
                    quality={50}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <div className='absolute rounded-full top-0 right-0 m-2 flex w-[25px] h-[25px] justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <FullScreen/>
                  </div>
                </div>
                <div className='font-custom text-center font-light'>
                  {img.split('_')[1].split('.')[0]}
                </div>
              </div>
            ))
          }
          </div>          
          { hasScroll &&
          <button onClick={() => scroll('right')} className="absolute z-10 top-0 right-0 h-full group" >
            <Right width="72" height="72" viewBox="0 0 24 24" className="stroke-white stroke-1 drop-shadow-md opacity-70 group-hover:opacity-100"/>
          </button>
          }
        </div>      
      </div>
  );
}
