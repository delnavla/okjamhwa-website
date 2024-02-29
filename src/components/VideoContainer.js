export default function VideoContainer() {
  return (
    <div className="sticky top-0 -z-10 -mt-24 relative">
      <video className="w-full h-screen object-none object-center" autoPlay muted loop>
        <source src="okjamhwa_website_background.mp4" type="video/mp4"/>        
      </video>
      <div className="flex absolute top-0 left-0 w-full h-full opacity-40 bg-black "></div>
      {/* <div className="flex absolute top-0 left-0 w-full h-full justify-center items-center">
        <div className="px-16 h-80 w-full px-10 max-w-screen-xl font-custom text-white text-6xl font-bold ">
          <p>당신이 먹기에</p>
          <p className="leading-relaxed">더 안전하게</p>
        </div>
      </div> */}
    </div>     
  );
}