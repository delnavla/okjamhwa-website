import PictureContainer from "@/components/PictureContainer";
import MiddleSection from "@/components/MiddleSection";
import Title from "@/components/Title";

export default function Inquiry() {

  const array = ['공지사항', '사진 게시판', '문의']
  const link = ['/support/notice', '/support/board', '/support/inquiry']

  return (
    <>
      <PictureContainer path={'middle_section/img4.png'} title={'고객센터'}/>
      <div className="bg-white">
        <MiddleSection array={array} activeMenu={'문의'} client={false} link={link}></MiddleSection>
        <div className="flex flex-col items-center py-10  ">
          <Title title={'문의'} />
          <div className="table font-custom text-xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md  sm:max-w-screen-sm sm:w-full w-11/12 ">
            <div className="table-row">
              <div className="table-cell text-center font-bold p-2">주소</div>
              <div className="table-cell text-left">충북 영동군 심천면 옥계폭포길 98-12</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-center font-bold p-2">전화</div>
              <div className="table-cell text-left">042-742-0036</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-center font-bold p-2">팩스</div>
              <div className="table-cell text-left">043-742-6522</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-center font-bold p-2">이메일</div>
              <div className="table-cell text-left">okjam62@daum.net</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}