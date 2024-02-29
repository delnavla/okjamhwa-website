'use client'
import { useEffect, useState } from 'react';
import FullScreen from '/public/interface-arrows-expand-3--expand-smaller-retract-bigger-big-small-diagonal.svg';
import Delete from "/public/interface-delete-bin-2--remove-delete-empty-bin-trash-garbage.svg";
import CarouselFullScreen from './CarouselFullScreen';
import { useRouter } from 'next/navigation';

export default function PhotoGrid({ collection }) {

  const [isFullScreen, setIsFullScreen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const [files, setFiles] = useState()

  const router = useRouter()

  const onClick = (img) => {
    setFiles(img.url)
    setIsFullScreen(true)
  }

  useEffect(() => {
    if (!isFullScreen) {
      setImgIndex(0)
    };
  }, [isFullScreen])

  function handleDeleteClick(event, body) {
    event.stopPropagation(); 
    if (confirm("삭제하시겠습니까?")) {
      fetch('/api/post/upload', { method : 'DELETE', body: JSON.stringify(body) })
      .then((r)=>{
        if (r.status == 200) {
        return router.refresh()
        }
      })
    }
  }

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
          <div className='flex items-center'>
            <Delete onClick={(e) => handleDeleteClick(e, img)} className="cursor-pointer m-auto"/>
          </div>
        </div>
      ))}
      {isFullScreen && <CarouselFullScreen files={files} imgIndex={imgIndex} setImgIndex={setImgIndex} setIsFullScreen={setIsFullScreen}/>}
    </>
  );
}