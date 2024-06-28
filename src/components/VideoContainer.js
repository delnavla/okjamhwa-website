'use client'

import { useEffect, useState } from "react";


export default function VideoContainer() {

  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth >= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      { screenSize && 
        <div className="sticky top-0 -z-10 xl:-mt-24 -mt-16 relative">
          <video className="w-full h-screen object-cover object-center" autoPlay muted loop>
            <source src="/okjamhwa_website_background.mp4" type="video/mp4"/>        
          </video>
          <div className="flex absolute top-0 left-0 w-full h-full opacity-40 bg-black "></div>
        </div>  
      }
    </>
  );
}