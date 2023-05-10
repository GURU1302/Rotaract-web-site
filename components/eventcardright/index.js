import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Image from "next/image";

export default function EventsCardRight({ name }) {


  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
  
      <div className="">
        <div className="min-h-[22rem] ml-0% lg:ml-[79.5%] hover:ml-[0%] min-w-[19rem] hover:md:max-w-full  duration-1000 flex sm:justify-end gap-12 rounded-xl shadow-lg bg-slate-100 p-8">
          <div className=" text-center leading-9 p-6 md:max-w-[55rem]"></div>

          <div className="min-h-[13rem] md:min-w-[15rem] object-right text-3xl rounded-xl text-center   bg-pink-400 p-4  ">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
