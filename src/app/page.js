import GeoContainer from "@/components/GeoContainer";
import LogoWhite from '/public/circularLogo_white.svg'
import CornerUp from '/public/interface-arrows-corner-up-right--keyboard-top-arrow-right-up.svg'
import Right from '/public/chevron-right.svg';
import Link from "next/link";
import VideoContainer from "@/components/VideoContainer";
import DraggableCarousel from "@/components/DraggableCarousel";
import { connectDB } from "@/util/database";
import Title from "@/components/Title";

export default async function Home() {
  const client = await connectDB
  const db = client.db('okjamhwa')
  let collection = await db.collection('board').find().sort({ _id: -1 }).toArray()

  collection = collection.map(col => ({
    ...col,
    _id: col._id.toString(),
  }));

  const images = collection.map(item => item.url[0]);

  let products = [
    '/products/딸기잼_280g.jpg', 
    '/products/참다래잼_280g.jpg', 
    '/products/블루베리잼_280g.jpg', 
    '/products/생강차_460g.jpg',
    '/products/모과차_460g.jpg', 
    '/products/포도즙_120ml.jpg', 
    '/products/상큼한 포도_120ml.jpg', 
    '/products/배농축액_480g.jpg',
    '/products/사과농축액_480g.jpg'
  ]

  return (
    <>
      <main>
        <VideoContainer/>                
        <div className="sticky top-0 -z-10 xl:-mt-24 -mt-16 relative md:hidden block">
          <img src="/middle_section/img2.png" className="w-full h-screen object-left object-cover"/>
          <div className="flex absolute top-0 left-0 w-full h-full opacity-40 bg-black "></div>
        </div>     
        <div className="flex flex-col absolute top-0 left-0 w-full h-full justify-end items-center">
          <div className="h-96 w-full md:px-10 px-6 max-w-screen-xl font-custom">
            <h2 className="text-white font-normal md:text-3xl text-lg pb-2">자연과 사람의 조화로움을 꿈꾸는</h2>
            <h1 className="text-white font-bold md:text-6xl text-3xl pb-5">옥잠화 영농조합입니다.</h1>                        
            <div className="flex justify-center items-center md:h-14 md:w-48 h-10 w-40 border border-white md:border-2 cursor-pointer p-2">
              <Link href='https://smartstore.naver.com/okjamhwa'>
                <div className="flex justify-center items-center">
                  <p className="text-white md:font-bold md:text-lg">스토어 바로가기</p>
                  <Right className="stroke-white stroke-2"/>
                </div>
              </Link>
              
            </div>        
          </div>
          <div className="flex w-full justify-end max-w-screen-xl pb-10">
            <LogoWhite className="md:h-32 h-20 mx-4"/>  
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white font-custom py-20 w-full text-[#24282C] overflow-hidden">  
          <Title title={'옥잠화영농조합은'}/>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:max-w-screen-2xl">
            <div className="flex flex-col justify-center items-center order-1">
              <p className="text-center sm:text-xl">물 맑고, 청정한 <br/>충청북도 영동군 심천면에 위치하고 있습니다.</p>
              <Link href='/company/about' className="flex justify-center items-center py-2 px-3 border border-black m-5">
                <p className="p-1">회사소개</p><CornerUp className="stroke-black"/>
              </Link>
            </div>
            <div className="flex items-center justify-center w-full order-2 sm:mb-0 mb-10"><GeoContainer/></div>
            <div className="flex items-center sm:h-[400px] w-full sm:order-3 order-4 sm:mb-0 mb-10"><DraggableCarousel images={images}/></div>
            <div className="flex flex-col justify-center items-center sm:order-4 order-3 sm:mb-0 mb-10">
              <p className="text-center sm:text-xl ">환경과 농업을 살리는 일을 소중히 여기며 <br/> 친환경농산물을 가공합니다.</p>
              <Link href='/business?params=OEM%20생산' className="flex justify-center items-center py-2 px-3 border border-black m-5 ">
                <p className="p-1">OEM 생산</p><CornerUp className="stroke-black"/>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center order-5 sm:mb-0 mb-10">
              <p className="text-center sm:text-xl">옥잠화꽃처럼 깨끗하고 향기로운 물품을 <br/>생산하기 위해 노력하겠습니다.</p>
              <Link href='/products' className="flex justify-center items-center py-2 px-3 border border-black m-5 ">
                <p className="p-1">제품소개</p><CornerUp className="stroke-black"/>
              </Link>
            </div>
            <div className="flex items-center sm:h-[400px] 1w-full order-6 "><DraggableCarousel images={products}/></div>
          </div>
        </div>
      </main>
    </>
  );
}

