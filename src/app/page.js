import Image from "next/image";
import Script from "next/script";
import VideoContainer from "@/components/VideoContainer";
import GeoContainer from "@/components/GeoContainer";
import Header from "@/components/Header2";

export default function Home() {


  return (
    <>
      {/* <Script src="https://ua.talk.naver.com/dist/sdk.js" />
      <div className="navertalk-friend-button" data-talk-id="w5w72h" data-size-width="224" data-size-height="60"
      data-device-type="PC" data-type="BASIC" data-channel-no="3072650" data-show-benefit="false"/> */}
      <Header position="sticky"/>
      <main id="pageBody">
        <VideoContainer/>                
        <GeoContainer/>
      </main>
    </>
  );
}
