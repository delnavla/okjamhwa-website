import Image from "next/image";
import X from '/public/interface-delete-1--remove-add-button-buttons-delete.svg';
import LeftArrow from '/public/interface-arrows-button-left--arrow-keyboard-left.svg';
import RightArrow from '/public/interface-arrows-button-right--arrow-right-keyboard.svg';

export default function CarouselFullScreen({
  files, 
  title = undefined,
  imgIndex, 
  setImgIndex,
  setIsFullScreen
}) {
  
  return (
    <>
      <div className="bg-white fixed w-screen h-screen inset-0 z-40">
        <div className="flex flex-row transition-transform duration-1000" style={{ transform: `translateX(-${imgIndex * 100}%)` }}>
        { files.map((img, index) => (
          <div key={index} className="flex shrink-0 justify-center items-center w-screen h-screen">
            <div className="relative w-4/5 h-4/5">
              <Image 
                src={ title ? `/${title}/${img}` : img}
                alt={imgIndex} 
                fill 
                className="object-contain"
              />        
            </div>
          </div>
        ))
        } 
        </div>
      </div>
      
      <button className="cursor-pointer fixed z-50 top-6 right-6" onClick={()=>setIsFullScreen(false)} >
        <X width="28" height="28" viewBox="0 0 14 14"/>
      </button>
      { imgIndex != 0 &&
        <button className="cursor-pointer fixed z-50 top-1/2 left-6" onClick={() => (setImgIndex((prevIndex) => prevIndex - 1 ))}>
          <LeftArrow width="28" height="28" viewBox="0 0 14 14"/>
        </button>
      }
      { imgIndex != files.length - 1 &&
        <button className="cursor-pointer fixed z-50 top-1/2 right-6" onClick={() => (setImgIndex((prevIndex) => prevIndex + 1 ))} >
          <RightArrow width="28" height="28" viewBox="0 0 14 14"/>
        </button>
      }
    </>
  )
}