export default function Title({title}) {
  return (
    <div className={`flex justify-start border-b border-black xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm sm:w-full w-11/12 ${ title == '공지사항' || title == '자주 묻는 질문' ? 'mb-0' : 'mb-10'}`}>
      <h1 className="sm:text-4xl text-3xl font-custom m-4">{title}</h1>
    </div>
  )
}