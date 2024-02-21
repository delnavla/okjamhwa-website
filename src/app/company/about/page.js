import Header from "@/components/Header";
import PictureContainer from "@/components/PictureContainer";
import Timeline from "@/components/Timeline";

export default function History() {
  return (
    <>
      <Header/>
      <PictureContainer path={'Recipes_PLP_Drinks_Desktop_3.webp'} />
      <div className="bg-white">
        <Timeline/>
      </div>
    </>    
  );
};