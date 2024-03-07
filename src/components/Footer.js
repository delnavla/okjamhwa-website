'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react'

export default function Footer() {

  const pathname = usePathname()

  return (
    <SessionProvider>
      { pathname.split('/')[1] != 'admin' &&
        <footer className="w-full h-36 md:py-8 py-4 border-t-[1px] border-solid border-neutral-300 bg-white">
          <section className="flex px-6 max-w-screen-xl justify-between m-auto font-custom md:flex-row flex-col">
          <div className="relative text-gray-600 text-sm font-light leading-loose w-[120px] h-[60px] hidden lg:block">
            <Image 
              src={'/horizontalLogo1_Gray.svg'}
              fill
              alt="logo"      
            />
          </div>
          <div className="sm:text-sm text-xs text-neutral-600 font-extralight leading-relaxed text-center mb-3" >
            <span>사업자 등록번호: 302-81-06189</span><span className="ml-2 pl-2 border-s-[1px]">대표자: 김도준</span>
            <p>주소: 충북 영동군 심천면 옥계폭포길 98-12 옥잠화영농조합법인</p>
            <span>대표전화: 043-742-0036</span><span className="ml-2 pl-2 border-s-[1px]">이메일: okjam62@daum.net</span>
          </div>

          <div className="text-gray-600 sm:text-sm text-xs font-light leading-loose text-center mb-3">
            <span>이용약관</span><span className="ml-2 pl-2 border-s-[1px]">개인정보 처리방침</span><span className="ml-2 pl-2 border-s-[1px]"><LoginToggle/></span>
            <p className="text-xs text-neutral-500 font-light">© 2024 Okjamhwa. All Rights Reserved</p>
          </div>
          </section>
        </footer>
      }
    </SessionProvider>
  );
}

function LoginToggle() {
  const { data: session, status } = useSession();

  if (session) {
    return <button onClick={() => signOut()}>로그아웃</button>;
  } else {
    return <button onClick={() => signIn()}>관리자 로그인</button>;
  }

};