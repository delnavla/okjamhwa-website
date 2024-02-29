'use client'
import { useState } from "react"
import { getSignedS3Url } from "@/util/action"

export default function Upload() {

  const [files, setFiles] = useState([])
  const [fileUrls, setFileUrls] = useState([])
  const [title, setTitle] = useState([])

  const handleSubmit = async (e) => {

    e.preventDefault()

    if (title == '') {
      alert("제목을 입력해주세요.")
      return
    }

    let uploadedFiles = []

    if (files.length) {
      for (const file of files) {
        const signedURLResult = await getSignedS3Url()
        const url = signedURLResult.success.url

        try {
          const response = await fetch(url, {
            method: 'PUT',
            body: file,
            headers: {
              "Content-Type": file.type,
            }
          });

          if (response.ok) {
            console.log('Upload successful:', url.split('?')[0]);
            uploadedFiles.push(url.split('?')[0]);
          } else {
            console.error('Upload failed');
          }
        } catch (error) {
          console.error('Upload error:', error);
        }
      }
      if (uploadedFiles.length === files.length) {
        document.getElementById('s3-url').value = JSON.stringify(uploadedFiles);
        document.querySelector('form').submit();
      }
    } else {
      alert('사진을 선택해주세요.')
      return
    }
  }

  const handleChange = (e) => {
    const selectedFiles = e.target.files
    setFiles([...selectedFiles])
    
    fileUrls.forEach(url => URL.revokeObjectURL(url))
    setFileUrls([])

    const urls = Array.from(selectedFiles).map(file =>
      URL.createObjectURL(file)
    )
    setFileUrls(urls)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <form action="/api/post/upload" method="POST" onSubmit={handleSubmit}>
        <input name="title" placeholder="title" value={title} onChange={handleTitleChange} className="border border-black pl-2 py-1 w-2/5"/>
        <input type="hidden" id="s3-url" name="url"/>
        <button type="submit" className="border border-black p-1 mt-2">업로드</button>
      </form>
      <input type="file" name="img" accept="image/*" multiple onChange={handleChange}/>
      <div className="flex">
        {fileUrls.map((url, index) => (
          <img key={index} className="w-1/5 mr-4" src={url} alt={`Selected file ${index + 1}`} />
        ))}
      </div>
    </>
  )
}