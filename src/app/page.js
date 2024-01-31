import Image from "next/image";
import Header from "../components/Header";
import Script from "next/script";


export default function Home() {


  return (
    <>
      <Header/>
      {/* <Script src="https://ua.talk.naver.com/dist/sdk.js" />
      <div className="navertalk-friend-button" data-talk-id="w5w72h" data-size-width="224" data-size-height="60"
      data-device-type="PC" data-type="BASIC" data-channel-no="3072650" data-show-benefit="false"/> */}
      <div className="absolute top-0 w-full">
        <video className=" w-full object-cover" autoPlay muted loop>
          <source src="okjamhwa_website_background.mp4" type="video/mp4"/>
        </video>
        <div className="flex absolute top-0 w-full h-full opacity-40 bg-black z-10"></div>
        <div className="flex absolute top-0 w-full h-full z-20 justify-center items-center">
          <div className="px-16 h-80 w-full px-10  max-w-screen-xl ">
            <p className="text-white text-6xl " style={{fontFamily: 'Pretendard', fontWeight: 700}}>당신이 먹기에</p>
            <p className="text-white text-6xl leading-relaxed" style={{fontFamily: 'Pretendard', fontWeight: 700}}>더 안전하게</p>
          </div>
        </div>
      </div>
    </>
  );
}
