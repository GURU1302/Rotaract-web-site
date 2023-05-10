import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Image from "next/image";

export default function EventsCard({ name, toGayabId }) {

  let isShow = true;

  const toggleElementView = () => {

    const element = document.getElementById(toGayabId);

    if(isShow){
      //hide kar do
      element.style.display = 'none'
    }else{
      //show kar do
      element.style.display = 'block'

    }
    
    isShow = !isShow;


  }
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div onMouseOver={() => {toggleElementView()}} onMouseOut={() => {toggleElementView()}}>
    
      <div className="min-h-[22rem] hover:object-center max-w-[19rem] hover:md:max-w-7xl hover:md:w-[100vw] duration-1000 flex flex-row hover:gap-12 rounded-xl shadow-lg bg-slate-100 p-8">
        
        <div className="min-h-[13rem] md:min-w-[15rem] text-3xl rounded-xl text-center   bg-pink-400 p-4  ">
          {name}
        </div>
        <div className=" text-center   hover:leading-9 hover:p-6 md:max-w-[0rem] md:min-h-[0rem] hover:md:max-w-[55rem]"></div>

        <p style={{ position: "relative" }}>
          
        </p>
      </div>
    </div>
  );
}
