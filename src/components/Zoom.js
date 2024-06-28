'use client'
import { useState } from "react";

export default function Zoom({
  img,
  width=300,
  height=400,
  borderSize = 200,
  }) {

  const [cursorPos, setCursorPos] = useState({ left: 0, top: 0, width: 0, height: 0});
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = e => {
    const rect = e.target.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.max(borderSize / 2, Math.min(x, rect.width - borderSize / 2));
    y = Math.max(borderSize / 2, Math.min(y, rect.height - borderSize / 2));
  
    setCursorPos({
      left: x - borderSize / 2,
      top: y - borderSize / 2,
      width: rect.width,
      height: rect.height            
    });
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  return (
    <div className="font-custom text-center font-light">
      <div className="relative"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <img className={`absolute border border-black cursor-zoom-in ${isHovering ? 'z-30' : '' }`} src={img.path} alt={img.name}/>
        { isHovering &&
          <>            
            <div className="z-20 fixed inset-0 backdrop-blur-sm pointer-events-none"/>
            <div className='absolute pointer-events-none bg-black/15 z-30'
            style={{ 
              width: `${borderSize}px`,
              height: `${borderSize}px`,
              left: `${cursorPos.left}px`, 
              top: `${cursorPos.top}px`,
            }}/>

            <div className="absolute z-30 pointer-events-none bg-no-repeat shadow-xl"
            style={{
              width: `${cursorPos.height}px`, 
              height: `${cursorPos.height}px`,          
              left: `${width + 30}px`,
              backgroundImage: `url(${img.path})`,
              backgroundSize: `${cursorPos.width * 2}px ${cursorPos.height * 2}px`,
              backgroundPosition: `${-cursorPos.left * 2}px ${-cursorPos.top * 2}px`,
            }}>              
            </div>
            
          </>
        }
      </div>
      {img.name}
    </div>
  );
}