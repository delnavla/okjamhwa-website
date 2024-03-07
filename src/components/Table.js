'use client'

import { useState } from "react"

import Editor from "./Lexical/Editor";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Write from "/public/interface-edit-write-2--change-document-edit-modify-paper-pencil-write-writing.svg";
import Edit from "/public/interface-edit-scissors--clipboard-copy-cut-paste-right-scissors.svg";
import Delete from "/public/interface-delete-bin-2--remove-delete-empty-bin-trash-garbage.svg";
import { useSession } from "next-auth/react";

export default function Table({collection}) {

  const { data: session, status } = useSession();

  let isAdmin = status === "authenticated"

  const router = useRouter()
  const [contentId, setContentId] = useState(null);
  const [editorState, setEditorState] = useState();

  const toggleContent = (id) => {
    if ( contentId === id) {
      setContentId(null);
    } else {
      setContentId(id);
    }
  };

  

  function handleEditClick(event, post) {
    event.stopPropagation(); 
    const queryString = new URLSearchParams(post).toString();
    router.push(`/admin/post/edit?${queryString}`)
  }

  function handleDeleteClick(event, id) {
    event.stopPropagation(); 
    if (confirm("삭제하시겠습니까?")) {
      fetch('/api/post/delete', { method : 'DELETE', body: id })
      .then((r)=>{
        if (r.status == 200) {
        return router.refresh()
        }
      })
    }
  }
  

  return (
    <div className="font-custom ">
      <div className="border-b border-black">
        <div className="table table-fixed relative w-full">
            <p className="table-cell min-h-12 py-4 sm:w-36 w-16 text-center">번호</p>
            <p className="table-cell min-h-12 py-4">제목</p>
            {isAdmin && <p className="table-cell min-h-12 w-20 p-4"><Link href='/admin/post/write' scroll={false}><Write width="28" height="28" viewBox="0 0 14 14" className="m-auto"/></Link></p>}          
            <p className="table-cell min-h-12 py-4 sm:w-32 w-20 text-center">등록일</p>
          </div>
      </div>
      { collection.map((post, index) => (
        <div key={post._id} className="border-b border-[#d4d4d4] ">
          <div className="table table-fixed relative w-full cursor-pointer" onClick={() => toggleContent(post._id)}>
            <p className="table-cell min-h-12 py-4 sm:w-36 w-16 text-center text-sm">{collection.length - index}</p>
            <p className="table-cell min-h-12 py-4">{post.title}</p>
            { isAdmin && 
              <>
                <p className="table-cell w-10 py-4" onClick={(e) => handleEditClick(e, post)}><Edit className="m-auto"/></p>
                <p className="table-cell w-10 py-4" onClick={(e) => handleDeleteClick(e, post._id)}><Delete className="m-auto"/></p>
              </>
            }
            <p className="table-cell min-h-12 py-4 sm:w-32 w-20 text-center text-sm">{post.date.toISOString().slice(0, 10)}</p>
          </div>
          { contentId === post._id &&
            <div className="pl-36 py-7 pr-7 bg-[#f8f8f8]">        
              <Editor initialEditorState={post.content} editable={false} editorState={editorState} setEditorState={setEditorState}/>
            </div>            
          }          
        </div>
      ))}
    </div>
  )
}