import GeoContainer from "@/components/GeoContainer";
import Logo from '/public/circularLogo_white.svg'
import Right from '/public/chevron-right.svg';
import Link from "next/link";

export default function Home() {

  return (
    <>
      <main id="pageBody">
        <VideoContainer/>             
        <div className="flex flex-col absolute top-0 left-0 w-full h-full justify-end items-center">
          <div className="h-96 w-full px-10 max-w-screen-xl font-custom leading-relaxed font-custom">
            <h2 className="text-white font-normal text-3xl ">자연과 사람의 조화로움을 꿈꾸는</h2>
            <h1 className="text-white font-bold text-6xl leading-relaxed">옥잠화 영농조합입니다.</h1>                        
            <div className="flex justify-center items-center h-14 w-44 border border-white border-2 cursor-pointer">
              <Link href='https://smartstore.naver.com/okjamhwa'>
                <div className="flex justify-center items-center">
                  <p className="text-white font-bold text-lg">스토어 바로가기</p>
                  <Right className="stroke-white stroke-2"/>
                </div>
              </Link>
              
            </div>        
          </div>
          <div className="flex w-full justify-end max-w-screen-xl pb-10">
            <Logo className="h-40 mx-4"/>  
          </div>
        </div>
        <div className="flex justify-center bg-white">           
          <GeoContainer/>
        </div>
      </main>
    </>
  );
}

function VideoContainer() {
  return (
    <div className="sticky top-0 -z-10 xl:-mt-24 -mt-16 relative">
      <video className="w-full h-screen object-cover object-center" autoPlay muted loop>
        <source src="/okjamhwa_website_background.mp4" type="video/mp4"/>        
      </video>
      <div className="flex absolute top-0 left-0 w-full h-full opacity-40 bg-black "></div>
    </div>     
  );
}