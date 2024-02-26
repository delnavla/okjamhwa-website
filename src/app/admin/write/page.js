'use client'
import Editor from "@/components/Lexical/Editor";
import { useState } from "react";

export default function Write() {
  const [editorState, setEditorState] = useState();
  
  return (
    <div className="font-custom">
      <form action="/api/post/write" method="POST">
        <input name="title" placeholder="title" className="border border-black pl-2 py-1 w-2/5"/>
        <input name="content" type="hidden" value={editorState}/>
        <Editor editorState={editorState} setEditorState={setEditorState}/>
        <button type="submit" className="border border-black p-1 mt-2" >글쓰기</button>
      </form>
    </div>
  )
}