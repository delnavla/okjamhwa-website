import Link from "next/link"

export default function MiddleSection({
  array, 
  activeMenu, 
  setActiveMenu, 
  client=true,
  link,
}) {

  const odd = array.length % 2

  return (
    <div className="border-y-[1px] border-black drop-shadow-md h-16 w-full ">
      <div className="flex m-auto items-center h-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
        {
          array.map( (data, index) => 
            <div key={index} className={`w-44 border-x-[1px] border-black font-custom text-center ${ client ? 'cursor-pointer' : ''} first:border-l-0  sm:first:border-l-[1px] last:border-r-0 sm:last:border-r-[1px] ${ odd ? 'even:border-x-0 ' : 'border-r-0' } ${data === activeMenu ? 'text-red-600 font-bold' : 'font-medium' }`}
              onClick={client ? () => setActiveMenu(array[index]) : undefined}>
              { client ? data : <Link href={link[index]} scroll={false}>{data}</Link> }
            </div>
          )          
        }          
      </div>
    </div>
  )
};