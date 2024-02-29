

export default function PictureContainer({
  path,
  title=null,
  content=null,
}) {
  return (
    <>
      <div className='sticky top-0 -z-10 relative block h-96 w-full bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(/${path})` }}>
        <div className="absolute w-full h-full bg-gradient-to-t from-[#040404a6] to-[#36363633]"/>
      </div>   
      <div className="flex absolute top-24 left-0 w-full h-96 justify-center">
        <div className="flex flex-col px-16 h-96 w-full px-10 max-w-screen-xl font-custom text-white text-6xl font-bold justify-center">
          <p>{title}</p>
          <p className="text-3xl leading-relaxed">{content}</p>
        </div>
      </div>
    </>
  );
}