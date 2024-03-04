'use client'
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

export default function Layout({children}) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading" && !session) {
      signIn();
    }
  }, [session, status]);

  return (
    <>
      { status === 'authenticated' && children }
    </>
  )
}