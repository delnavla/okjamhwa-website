

export default function PictureContainer({path}) {
  return (
      <div className='relative block h-96 w-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(/${path})` }}>
        <div className="absolute w-full h-full bg-gradient-to-t from-[#040404a6] to-[#36363633]"/>
      </div>   
  );
}