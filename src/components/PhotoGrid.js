'use client'
import { useEffect, useState } from 'react';
import FullScreen from '/public/interface-arrows-expand-3--expand-smaller-retract-bigger-big-small-diagonal.svg';
import CarouselFullScreen from './CarouselFullScreen';

export default function PhotoGrid({ collection }) {

  const [isFullScreen, setIsFullScreen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [files, setFiles] = useState()

  const onClick = (img) => {
    setFiles(img.url)
    setIsFullScreen(true)
    console.log(img)
  }

  useEffect(() => {
    if (!isFullScreen) {
      setImgIndex(0)
    };
  }, [isFullScreen])

  return (
    <>
      {collection.map((img, index) => (
        <div key={index} className='text-center'>
          <div className='relative overflow-hidden rounded-lg group' onClick={()=>{onClick(img)}}>
            <img 
              src={img.url[0]}
              className='aspect-[4/3] object-center object-cover transition hover:scale-105 cursor-pointer'
            />
            <div className='absolute rounded-full top-0 right-0 m-2 flex w-[25px] h-[25px] justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <FullScreen/>
            </div>
          </div>
          <p>{img.title}</p>
          <p className='font-light text-sm'>{img.date.toISOString().slice(0, 10)}</p>
        </div>
      ))}
      {isFullScreen && <CarouselFullScreen files={files} imgIndex={imgIndex} setImgIndex={setImgIndex} setIsFullScreen={setIsFullScreen}/>}
    </>
  );
}