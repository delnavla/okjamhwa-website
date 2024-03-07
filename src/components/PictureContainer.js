export default function PictureContainer({
  path,
  title=null,
  content=null,
  position='bg-center'
}) {
  return (
    <>
      <div className={`sticky top-0 -z-10 relative block lg:h-96 sm:h-80 h-60 w-full bg-no-repeat bg-cover bg-center ${position}`} style={{ backgroundImage: `url(/${path})` }}>
        <div className="absolute w-full h-full bg-gradient-to-t from-[#040404a6] to-[#36363633]"/>
      </div>   
      <div className="flex absolute xl:top-24 top-16 left-0 w-full lg:h-96 sm:h-80 h-60 justify-center">
        <div className="flex flex-col px-10 lg:h-96 sm:h-80 h-60 w-full max-w-screen-xl font-custom text-white text-5xl font-light justify-center text-center">
          <p>{title}</p>
          <p className="text-3xl leading-relaxed">{content}</p>
        </div>
      </div>
    </>
  );
}