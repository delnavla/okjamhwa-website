'use client'
import { useRef, useState } from 'react';

export default function DraggableCarousel({images, aspect}) {

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const startDrag = (e) => {
    setIsDrag(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  }

  const stopDrag = () => {
    setIsDrag(false)
  }

  const onDrag = (e) => {
    if (!isDrag) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) / 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 h-full w-28 bg-gradient-to-r from-white to-transparent"/>
        <div className="absolute top-0 right-0 h-full w-28 bg-gradient-to-l from-white to-transparent"/>
      </div>
      <div
        onMouseDown={startDrag}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onDrag}
        className={`overflow-x-scroll relative scrollbar-hide w-full ${isDrag ? "cursor-grabbing" : 'cursor-grap'}` }
        ref={carouselRef}
      >
        <div className='flex'>
          {
            images.map((img, index) =>        
              <div key={index} className='flex min-w-max sm:h-[300px] h-[210px] m-3 '>     
                <img
                  src={img}
                  className={`${aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'} object-center object-cover transition rounded-lg`}
                />                    
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};