import PictureContainer from "@/components/PictureContainer";
import Shopping from '/public/shopping-bag-hand-bag-2--shopping-bag-purse-goods-item-products.svg'

export default function Product({params}) {

  const product = decodeURIComponent(params.product)

  const productNumber = {
    딸기잼_280g : 9494363231, 
    포도잼_280g : 9494424268,
    참다래잼_280g : 9494417358,
    블루베리잼_280g : 9494406172,
    // 사과잼_280g : ,
    포도즙_120ml : 9494332376,
    '상큼한 포도_120ml' : 9494346539,
    생강차_460g : 9494446976, 
    모과차_460g : 9570481450,
    유자차_460g : 9494435520,
    // 배농축액_480g : ,
    // 사과농축액_480g : ,
    잼선물모음_280g : 9774007078,
    차선물모음_460g : 9774091854,
  }

  return (
    <>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} title={'제품소개'}/>
      <div className="bg-white">
        <div className="max-w-screen-md m-auto py-20">
          <div className="flex border-b border-black pb-5 mb-10 justify-end">
            <a href={`https://smartstore.naver.com/okjamhwa/products/${productNumber[product]}`} target='_blank'>
              <div className="p-2 rounded bg-[#03c75a] cursor-pointer">
                <Shopping width="28" height="28" viewBox="0 0 14 14" className='stroke-white'/>
              </div>
            </a>
          </div>
          {          
            Array.from({ length: 7 }, (_, i) => i).map((number) => {
              return (
                <img key={number} src={`/products/detail/${product}_${number}.jpg`} alt={number}/>
              )
            })          
          }
        </div>
      </div>
    </>
  )
}