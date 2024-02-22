export default function MiddleSection({array, activeMenu, setActiveMenu}) {

  const odd = array.length % 2

  return (
    <div className="border-y-[1px] border-black h-16 w-full ">
      <div className="flex max-w-screen-xl m-auto items-center h-full">
        {
          array.map( (data, index) => 
            <div key={index} className={`w-44 border-x-[1px] border-black font-custom text-center cursor-pointer ${ odd ? 'even:border-x-0' : 'border-r-0 last:border-r-[1px] ' } ${data === activeMenu ? 'text-red-600' : 'font-light' }`}
              onClick={() => setActiveMenu(array[index])}>
              {data}
            </div>
          )          
        }          
      </div>
    </div>
  )
};