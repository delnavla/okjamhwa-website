'use client'
import Editor from "@/components/Lexical/Editor";
import { useState } from "react";

export default function Edit({ searchParams }) {
  const [editorState, setEditorState] = useState();
  
  return (
    <div className="font-custom">
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="title" className="border border-black pl-2 py-1 w-2/5" defaultValue={searchParams.title}/>
        <input name="id" type="hidden" value={searchParams._id}/>
        <input name="content" type="hidden" defaultValue={editorState}/>
          <Editor editorState={editorState} setEditorState={setEditorState} initialEditorState={searchParams.content}/>
        <select name="category" defaultValue={searchParams.category} disabled className="border border-black p-1 mt-2 mr-2">
          <option value="notice">공지사항</option>
          <option value="inquiry">문의</option>
        </select>
        <input type="hidden" name="category" value={searchParams.category} />
        <button type="submit" className="border border-black p-1 mt-2" >수정하기</button>
      </form>
    </div>
  )
}