import { connectDB } from "@/util/database";
import PictureContainer from "@/components/PictureContainer";
import MiddleSection from "@/components/MiddleSection";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";
import Write from "/public/interface-edit-write-2--change-document-edit-modify-paper-pencil-write-writing.svg";

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
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} />
      <div className="bg-white">
        <MiddleSection array={array} activeMenu={'사진 게시판'} client={false} link={link}/>
        <div className="max-w-screen-xl py-20 m-auto font-custom">
          <Link href='/admin/upload'><Write width="28" height="28" viewBox="0 0 14 14" className="my-6"/></Link>
          <div className="grid grid-cols-3 gap-6 " >
            <PhotoGrid collection={collection}/>              
          </div>
        </div>
      </div>
    </>
  )
}