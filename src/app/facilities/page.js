'use client'
import MiddleSection from "@/components/MiddleSection";
import PhotoScroll from "@/components/PhotoScroll";
import PictureContainer from "@/components/PictureContainer";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Facilities() {

  const params  = useSearchParams();

  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    if (params.get('params')) {
      setActiveMenu(params.get('params'))
    }
  }, [params]);

  return (
    <>
      <PictureContainer path={'middle_section/img6.png'} />
      <div className="bg-white">
        <MiddleSection array={['시설안내', '설비안내']} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className="max-w-screen-xl m-auto">
          { activeMenu === '시설안내' &&   
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
    </>    
  );
};