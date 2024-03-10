'use client'
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

export default function AdminLayout({children}) {

  return (
    <SessionProvider>
      <div className="w-52 h-full fixed">
        <nav className="flex justify-center w-52 h-full font-custom">
          <div>
            <ul>
              <li><Link href='/support/notice/'>공지사항</Link></li>
              <li><Link href='/support/board/'>사진 게시판</Link></li>
              <li><Link href='/support/inquiry/'>문의</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="relative mt-12 ml-52 ">
        {children}
      </div>
    </SessionProvider>
  )
}