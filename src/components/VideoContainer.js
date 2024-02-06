export default function VideoContainer() {
  return (
    <div className="-mt-20 relative">
      <video className="w-full" autoPlay muted loop>
        <source src="okjamhwa_website_background.mp4" type="video/mp4"/>        
      </video>
      <div className="flex absolute top-0 left-0 w-full h-full opacity-40 bg-black z-10"></div>
      <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center z-20 ">
        <div className="px-16 h-80 w-full px-10  max-w-screen-xl ">
          <p className="text-white text-6xl " style={{fontFamily: 'Pretendard', fontWeight: 700}}>당신이 먹기에</p>
          <p className="text-white text-6xl leading-relaxed" style={{fontFamily: 'Pretendard', fontWeight: 700}}>더 안전하게</p>
        </div>
      </div>
    </div>     
  );
}