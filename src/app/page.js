import VideoContainer from "@/components/VideoContainer";
import GeoContainer from "@/components/GeoContainer";
import Header from "@/components/Header";

export default function Home() {

  return (
    <>
      <main id="pageBody">
        <VideoContainer/>             
        <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center">
          <div className="px-16 h-80 w-full px-10 max-w-screen-xl font-custom text-white text-6xl font-bold">
            <p>당신이 먹기에</p>
            <p className="leading-relaxed">더 안전하게</p>
          </div>
        </div>
        <div className="flex justify-center bg-white">           
          <GeoContainer/>
        </div>
      </main>
    </>
  );
}
