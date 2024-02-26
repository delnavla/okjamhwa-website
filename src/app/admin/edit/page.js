'use client'
import Editor from "@/components/Lexical/Editor";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit() {
  const [editorState, setEditorState] = useState();
  
  const params  = useSearchParams();

  return (
    <div className="font-custom">
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="title" className="border border-black pl-2 py-1 w-2/5" defaultValue={params.get('title')}/>
        <input name="id" type="hidden" value={params.get('_id')}/>
        <input name="content" type="hidden" defaultValue={editorState}/>
          <Editor editorState={editorState} setEditorState={setEditorState} initialEditorState={params.get('content')}/>
        <button type="submit" className="border border-black p-1 mt-2" >수정하기</button>
      </form>
    </div>
  )
}