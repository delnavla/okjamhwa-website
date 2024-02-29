import PictureContainer from "@/components/PictureContainer";

export default function Product({params}) {

  const product = decodeURIComponent(params.product)
  
  return (
    <>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} title={'test title'} content={'test content'} />
      <div className="bg-white">
        <div className="max-w-screen-md m-auto py-20">
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