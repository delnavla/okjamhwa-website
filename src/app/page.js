import GeoContainer from "@/components/GeoContainer";

export default function Home() {

  return (
    <>
      <main id="pageBody">
        <VideoContainer/>             
        <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center">
          <div className="h-80 w-full px-10 max-w-screen-xl font-custom leading-relaxed font-custom">
            <h2 className="text-white font-normal text-3xl ">자연과 사람의 조화로움을 꿈꾸는</h2>
            <h1 className="text-white font-bold text-6xl leading-relaxed">옥잠화 영농조합입니다.</h1>
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
    <div className="sticky top-0 -z-10 -mt-24 relative">
      <video className="w-full h-screen object-cover object-center" autoPlay muted loop>
        <source src="/okjamhwa_website_background.mp4" type="video/mp4"/>        
      </video>
      <div className="flex absolute top-0 left-0 w-full h-full opacity-40 bg-black "></div>
    </div>     
  );
}