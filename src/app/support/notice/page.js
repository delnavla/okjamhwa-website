import { connectDB } from "@/util/database";
import PictureContainer from "@/components/PictureContainer";
import Table from "@/components/Table";
import MiddleSection from "@/components/MiddleSection";

export default async function Notice() {

  const client = await connectDB
  const db = client.db('okjamhwa')
  let collection = await db.collection('notice').find().sort({ _id: -1 }).toArray()

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
        <MiddleSection array={array} activeMenu={'공지사항'} client={false} link={link}></MiddleSection>
        <div className="max-w-screen-xl py-20 m-auto">
          <Table collection={collection}/>
        </div>
      </div>
    </>
  )
}