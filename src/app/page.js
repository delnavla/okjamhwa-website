import VideoContainer from "@/components/VideoContainer";
import GeoContainer from "@/components/GeoContainer";
import Header from "@/components/Header";

export default function Home() {

  return (
    <>
      <main id="pageBody">
        <VideoContainer/>             
        <div className="flex justify-center bg-white">           
          <GeoContainer/>
        </div>
      </main>
    </>
  );
}
