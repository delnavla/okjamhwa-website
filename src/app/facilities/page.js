'use client'
import MiddleSection from "@/components/MiddleSection";
import OutLine from "@/components/OutLine";
import PhotoScroll from "@/components/PhotoScroll";
import PictureContainer from "@/components/PictureContainer";
import Title from "@/components/Title";
import { useState } from "react";

export default function Facilities({ searchParams }) {

  const [activeMenu, setActiveMenu] = useState(searchParams.params);

  return (
    <>
      <PictureContainer path={'middle_section/img2.png'} title={'시설설비'}/>
      <div className="bg-white">
        <MiddleSection array={['시설안내', '설비안내']} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className="flex flex-col items-center py-10">
        <Title title={activeMenu}/>
        { activeMenu === '시설안내' &&   
          <>
            <div className="relative w-full max-w-screen-xl font-custom hidden xl:block">
              <div className="flex justify-center p-40 ">
                <img src="건물개요.png" width={1000} alt="건물개요"/>
              </div>
              <div className="absolute top-0">
                <OutLine />
              </div>
              <div className="absolute top-[410px] p-[10px]">
                <p className="text-xl font-semibold">본동</p>
                <p className="pt-1"><span>부지</span><span className="font-light ml-2">1,995m²</span></p>
                <p className="pt-1"><span>연면적</span><span className="font-light ml-2">495m²</span></p>
                <p className="pt-1"><span>사용용도</span><span className="font-light ml-2">옥잠화영농조합 본점, 완제품 가공공장</span></p>
              </div>
              <div className="absolute top-[10px] left-[500px] p-[10px]">
                <p className="text-xl font-semibold text-right">저온저장고</p>
                <p className="pt-1"><span>부지</span><span className="font-light ml-2">990m²</span></p>
                <p className="pt-1"><span>연면적</span><span className="font-light ml-2">165m²</span></p>
                <p className="pt-1"><span>사용용도</span><span className="font-light ml-2">착즙포도즙 냉동</span></p>
              </div>
              <div className="absolute top-[60px] right-[130px] p-[10px]">
                <p className="text-xl font-semibold text-right">전처리동</p>
                <p className="pt-1"><span>부지</span><span className="font-light ml-2">660m²</span></p>
                <p className="pt-1"><span>연면적</span><span className="font-light ml-2">1층 165m² 2층 82m²</span></p>
                <p className="pt-1"><span>사용용도</span><span className="font-light ml-2">1층 포도즙착즙 및 전처리장 / 포도주 제조장</span><br/><span className="font-light ml-[68px]">2층 게스트하우스</span></p>
              </div>
            </div>
            <div className="block xl:hidden">
              <div className="sm:justify-center hidden sm:flex ">                
                <img src="/개요/건물개요_.png" alt="건물개요 설명" className="lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"/>
              </div>
              <div className="flex sm:hidden">

              </div>
            </div>
          </>
        }

        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm sm:w-full w-10/12 m-auto">
          { activeMenu === '시설안내' &&   
            <>
              <div className="block sm:hidden">
                <PhotoScroll
                  title={"개요"}
                  files={['건물개요_.png']}
                />
              </div>
              {
                [
                  {
                    title: '본동',
                    files: ['1_본동.png']
                  },
                  {
                    title: '전처리동',
                    files: ['1_전처리동.png']
                  },
                  {
                    title: '저온저장고',
                    files: ['1_저온저장고(1).png', '2_저온저장고(2).png']
                  }
                ].map((photo, index) => (
                  <PhotoScroll
                    key={index}
                    title={photo.title}
                    files={photo.files}
                  />
                ))     
              }
            </>
          }
          { activeMenu === '설비안내' &&
            [
              {
                title: '음료라인',
                files: ['1_여과기,순간살균기.jpg', '2_순간살균기.jpg', '3_스파우트기.jpg', '4_파우치기.jpg']
              },
              {
                title: '잼라인',
                files: ['1_이물선별대,씨분리기,분체기.jpg', '2_농축기,살균기.jpg', '3_충진기,금속검출기.jpg', '4_캡핑기,냉각기.jpg', '5_건조기,수축포장기.jpg']
              }
            ].map((photo, index) => (
              <PhotoScroll
                key={index}
                title={photo.title}
                files={photo.files}
              />
            ))
          }
        </div>
        </div>
      </div>
    </>    
  );
};