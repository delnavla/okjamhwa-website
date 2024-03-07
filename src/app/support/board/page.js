import { connectDB } from "@/util/database";
import PictureContainer from "@/components/PictureContainer";
import MiddleSection from "@/components/MiddleSection";
import PhotoGrid from "@/components/PhotoGrid";
import Title from "@/components/Title";

export default async function Notice() {

  const client = await connectDB
  const db = client.db('okjamhwa')
  let collection = await db.collection('board').find().sort({ _id: -1 }).toArray()

  collection = collection.map(col => ({
    ...col,
    _id: col._id.toString(),
  }));

  const array = ['공지사항', '사진 게시판', '문의']
  const link = ['/support/notice', '/support/board', '/support/inquiry']

  return (
    <>
      <PictureContainer path={'middle_section/img4.png'} title={'고객센터'}/>
      <div className="bg-white">
        <MiddleSection array={array} activeMenu={'사진 게시판'} client={false} link={link}/>
        <div className="flex flex-col items-center py-10 ">
          <Title title={'사진 게시판'}/>
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm sm:w-full w-11/12 m-auto font-custom">          
          <PhotoGrid collection={collection}/>              
        </div>
        </div>
      </div>
    </>
  )
}