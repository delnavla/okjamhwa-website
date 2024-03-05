import { connectDB } from "@/util/database";
import PictureContainer from "@/components/PictureContainer";
import MiddleSection from "@/components/MiddleSection";
import PhotoGrid from "@/components/PhotoGrid";

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
      <PictureContainer path={'middle_section/img6.png'}/>
      <div className="bg-white">
        <MiddleSection array={array} activeMenu={'사진 게시판'} client={false} link={link}/>
        <div className="flex flex-col items-center py-20">
          <div className="w-full max-w-screen-xl flex justify-start border-b border-black">
            <h1 className="text-4xl font-custom m-4">사진 게시판</h1>
          </div>
        <div className="max-w-screen-xl py-20 m-auto font-custom">          
          <PhotoGrid collection={collection}/>              
        </div>
        </div>
      </div>
    </>
  )
}