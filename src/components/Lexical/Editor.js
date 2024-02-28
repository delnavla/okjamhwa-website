'use client'
import './styles.css'
import { $getRoot, $getSelection, $isRangeSelection } from 'lexical';
import { useEffect, useRef, useState, useContext, createContext } from 'react';

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { $createHeadingNode, HeadingNode } from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, ListItemNode, ListNode } from '@lexical/list'
import {$generateHtmlFromNodes} from '@lexical/html';



const theme = {
  // heading: {
  //   h1: 'editor-heading-h1'
  // },
  // list: {
  //   ol: 'editor-list-ol',
  //   ul: 'editor-list-ul',
  //   listitem: 'editor-listItem',
  // }
}

// function HeadingToolbarPlugin() {
//   const [editor] = useLexicalComposerContext();
//   const onClick = (e) => {
//     editor.update(() => {
//       const selection = $getSelection();
//       if ( $isRangeSelection(selection)) {
//         $setBlocksType(selection, () => $createHeadingNode('h1'));
//       };
//     });
//   };
//   return <button onClick={onClick}>Heading</button>
// }

// function ListToolbarPlugin() {
//   const [editor] = useLexicalComposerContext();
//   const listTags = ['ol', 'ul']
//   const onClick = (tag) => {
//     if (tag === 'ol') {
//       editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
//     } else if ( tag === 'ul') {
//       editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
//     } 
//   };
//   return <div>{listTags.map((tag) => (
//     <button onClick={() => onClick(tag)} key={tag}>{tag.toUpperCase()}</button>
//   ))}</div>;
// }

// function ToolbarPlugin() {
//   return <div className='flex'>
//     <HeadingToolbarPlugin/>
//     <ListToolbarPlugin/>
//   </div>

// }


function onError(error) {
  console.error(error);
}

export default function Editor({
  initialEditorState='{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
  editable=true,
  editorState,
  setEditorState,
}) {

  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    // nodes: [
    //   HeadingNode,
    //   ListNode,
    //   ListItemNode,
    // ],
    editable: editable,
    editorState: initialEditorState,
  };

  // const [editorState, setEditorState] = useState();
  function onChange(editorState) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {/* <ToolbarPlugin /> */}
      {/* <ListPlugin /> */}
      <RichTextPlugin
        contentEditable={<ContentEditable className={`${ editable ? 'w-2/5 h-96 p-2 border border-black overflow-auto overflow-x-hidden ': 'w-full'}`}/>}
        placeholder={
          editable ? <div className='absolute p-2 top-9 '>Enter some text...</div> : null
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <OnChangePlugin onChange={onChange} />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}