

export default function AdminLayout({children}) {

  return (
    <>
      <div className="w-52 h-full fixed">
        <nav className="flex justify-center w-52 h-full font-custom">
          <div>
            <ul>
              <li>공지사항</li>
              <li>사진 게시판</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="relative mt-12 ml-52 ">
        {children}
      </div>
    </>
  )
}