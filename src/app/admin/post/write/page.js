'use client'
import Editor from "@/components/Lexical/Editor";
import { useState } from "react";

export default function Write({ searchParams }) {
  const [editorState, setEditorState] = useState();

  return (
    <div className="font-custom">
      <form action="/api/post/write" method="POST">

        <input name="title" placeholder="title" className="border border-black pl-2 py-1 w-2/5"/>
        <input name="content" type="hidden" defaultValue={editorState}/>
        <Editor editorState={editorState} setEditorState={setEditorState}/>
        <select name="category" defaultValue={searchParams.category || ''} className="border border-black p-1 mt-2 mr-2">
          <option value="notice">공지사항</option>
          <option value="inquiry">문의</option>
        </select>
        <button type="submit" className="border border-black p-1 mt-2" >글쓰기</button>
      </form>
    </div>
  )
}