import { connectDB } from "@/util/database";
import PictureContainer from "@/components/PictureContainer";
import MiddleSection from "@/components/MiddleSection";
import PhotoGrid from "@/components/PhotoGrid";
import Title from "@/components/Title";
import Link from "next/link";

export default async function Board({ searchParams }) {

  let page = parseInt( searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 2

  const { collection, totalPages} = await getData(perPage, page)
  const array = ['공지사항', '사진 게시판', '문의']
  const link = ['/support/notice', '/support/board', '/support/inquiry']

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <>
      <PictureContainer path={'middle_section/img4.png'} title={'고객센터'}/>
      <div className="bg-white">
        <MiddleSection array={array} activeMenu={'사진 게시판'} client={false} link={link}/>
        <div className="flex flex-col items-center py-10 ">
          <Title title={'사진 게시판'}/>
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm sm:w-full w-11/12 m-auto font-custom">          
          <PhotoGrid collection={collection}/>      

            { page === 1 ? (
              <div className="opacity-60">
                Previous
              </div>
            ) : (
              <Link href={`?page=${prevPage}`} scroll={false}>
                Previous
              </Link>
            )}

            {
              pageNumbers.map( (pageNumber, index) => (
                <Link 
                  key={index} 
                  href={`?page=${pageNumber}`} 
                  scroll={false}
                  className={page === pageNumber ? "bg-green-500 " : "hover:bg-green-500 px-1"}>
                  {pageNumber}
                </Link>
                  
              ))
            }

            { page === totalPages ? (
              <div className="opacity-60">
                Next
              </div>
            ) : (
              <Link href={`?page=${nextPage}`} scroll={false}>
                Next
              </Link>
            )}

        </div>
        </div>
      </div>
    </>
  )
}

async function getData(perPage, page) {

  const client = await connectDB
  const db = client.db('okjamhwa')
  const totalCount = await db.collection('board').countDocuments();
  const totalPages = Math.ceil(totalCount / perPage);
  let collection = await db.collection('board')
                             .find()
                             .sort({ _id: -1 })
                             .skip((page - 1) * perPage)
                             .limit(perPage)
                             .toArray();

  collection = collection.map(col => ({
    ...col,
    _id: col._id.toString(),
  }));

  const response = { collection, totalPages}
  return response;
}