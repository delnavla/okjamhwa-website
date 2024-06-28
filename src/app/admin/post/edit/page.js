'use client'
import Editor from "@/components/Lexical/Editor";
import { useState } from "react";
import { useSearchParams } from 'next/navigation'

export default function Edit() {
  const [editorState, setEditorState] = useState();
  const searchParams = useSearchParams()

  return (
    <div className="font-custom">
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="title" className="border border-black pl-2 py-1 w-2/5" defaultValue={searchParams.get('title')}/>
        <input name="id" type="hidden" value={searchParams.get('_id')}/>
        <input name="content" type="hidden" defaultValue={editorState}/>
          <Editor editorState={editorState} setEditorState={setEditorState} initialEditorState={searchParams.get('content')}/>
        <select name="category" defaultValue={searchParams.get('category')} disabled className="border border-black p-1 mt-2 mr-2">
          <option value="notice">공지사항</option>
          <option value="inquiry">문의</option>
        </select>
        <input type="hidden" name="category" value={searchParams.get('category')} />
        <button type="submit" className="border border-black p-1 mt-2" >수정하기</button>
      </form>
    </div>
  )
}