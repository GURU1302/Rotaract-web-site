import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/footer/footer";
import "aos/dist/aos.css";
import Aos from "aos";

import { useEffect } from "react";
import Allbum from "../components/Album card/Allbumcard";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="hero-div">
        <div className="hero-div-container item-container">
          <div className="hero-left">
            <h4>WELCOME TO ROTARACT, BIT Mesra</h4>
            <h2>We believe in Uplifting personality, serving humanity</h2>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.25" }}>
              The work of rotaract begins inside the community with its own
              unique needs and concern. Though we server in countless ways,
              we've focussed our efforst to maximize our impact
            </p>
          </div>
          <div className="hero-right">
            <img
              src="/hero-mobile.png"
              style={{ maxWidth: "30rem", marginTop: "3rem" }}
              alt="hero-image-right"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-200 only-intro">
        <div className=" min-h-[20rem] p-3 text-center rounded-md item-container">
          <h3 className="font-sas italic p-0">
            Welcome to the world of Rotaract
          </h3>
        </div>
      </div>

      <div className="image-with-para ">
        <div className="  flex flex-nowrap m-0 gap-12 item-container  ">
          <div>
            <Image src="/child.jpg" height={600} width={900}></Image>
          </div>
          <div className=" bg-slate-100   min-h-[8rem]  ">
            <div className="text-center m-10 p-5 font-sans italic">
              {" "}
              "Poor children in Baltimore face even worse odds than low-income
              kids elsewhere, mostly because they remain in impoverished
              neighborhoods."
            </div>{" "}
          </div>
        </div>
      </div>

      <div className=" bg-blue-200 only-intro">
        <div className=" min-h-[20rem] p-3 text-center rounded-md item-container">
          <h3 className="font-sas italic">Donation</h3>
        </div>
      </div>

      <div className="image-with-para ">
        <div className="flex flex-nowrap gap-12 item-container">
          <div className="min-h-[10rem]" data-aos="zoom-out-right">
            <Image src="/donate.jpg" height={500} width={700}></Image>
          </div>
          <div className="min-h-[5rem] ">
            <div className="m-12 p-12 text-justify">
              “Giving does not only precede receiving; it is the reason for it.
              It is in giving that we receive.
            </div>
          </div>
        </div>
      </div>

      <div className="album-container">
        <div className="gap-5 m-5 flex flex-wrap item-container" style={{justifyContent: 'center'}}>
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum />
          <Allbum /> <Allbum />
        </div>
      </div>

      <h2 className="text-center font-serif">FlagShip Event</h2>

      <div className=" max-h-[30rem] min-w-[9rem] gap-5 flex flex-nowrap " style={{backgroundColor: '#131314', color:'#bababa'}}>

        <div data-aos="flip-up" style={{width: '50%'}}>
          {/* <Image src="/Flagship.jpg " width={780} height={500}></Image> */}
          <img src="/Flagship.jpg " style={{height: '100%'}} />
        </div>

        <div className="text-center p-3" >Hello </div>
      </div>
      <Footer />
    </>
  );
}
