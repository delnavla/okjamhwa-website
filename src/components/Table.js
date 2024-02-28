'use client'

import { useState } from "react"

import Editor from "./Lexical/Editor";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Table({collection}) {

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
    router.push(`/admin/edit?${queryString}`)
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
            <p className="table-cell min-h-12 py-4 w-36 text-center">번호</p>
            <p className="table-cell min-h-12 py-4">제목</p>
            <p className="table-cell min-h-12 w-20 py-4 text-center"><Link href='/admin/write'>글쓰기</Link></p>
            <p className="table-cell min-h-12 py-4 w-32 text-center">등록일</p>
          </div>
      </div>
      { collection.map((post, index) => (
        <div key={post._id} className="border-b border-[#d4d4d4] ">
          <div className="table table-fixed relative w-full cursor-pointer" onClick={() => toggleContent(post._id)}>
            <p className="table-cell min-h-12 py-4 w-36 text-center">{collection.length - index}</p>
            <p className="table-cell min-h-12 py-4">{post.title}</p>
            <p className="table-cell w-10 py-4 text-center" onClick={(e) => handleEditClick(e, post)}>📝</p>
            <p className="table-cell w-10 py-4 text-center" onClick={(e) => handleDeleteClick(e, post._id)}>❌</p>
            <p className="table-cell min-h-12 py-4 w-32 text-center">{post.date.toISOString().slice(0, 10)}</p>
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