import "aos/dist/aos.css";
import Aos from "aos";
import {

  FaRegEnvelope,
  FaPhoneAlt,
  FaLocationArrow,

} from "react-icons/fa";
import { useEffect } from "react";
import Footer from "../components/footer/footer";

export default function Contact() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
      
        <div className="contact bg-white sm:min-h-[30rem] text-pink-500 p-10 gap-5 ">
          <h2 className="" data-aos="fade-right">
            GET IN TOUCH
          </h2>
          <div
            data-aos="fade-right"
            className=" sm:float-left sm:text-left sm:min-h-[5rem] text-sm sm:text-md pl-2 sm:w-[25rem] text-slate-800"
          >
            {" "}
            fyfi doie fgefwe fgfewfgw igf wiufg f uvb vod ud dktou cvsui csdg
            cvsdu f hifh ioh h ohgsfggogfsogf ufdg f ooghhvhidhvvihh
            <div
              style={{
                paddingLeft: "24px",
                paddingTop: "24px",
                display: "flex",
              }}
            >
              <div style={{ width: "10%", fontSize: "20px", color: "#ec4899" }}>
                <FaPhoneAlt />
              </div>
              <div
                style={{
                  width: "90%",
                  paddingTop: "0px",
                  paddingLeft: "0px",
                  fontSize: "16px",
                }}
              >
                <a href="tel:+916203321160">+91 - 6203321160</a>
              </div>
            </div>
            <div
              style={{
                paddingLeft: "24px",
                paddingTop: "24px",
                display: "flex",
              }}
            >
              <div style={{ width: "10%", fontSize: "20px", color: "#ec4899" }}>
                <FaRegEnvelope />
              </div>

              <div
                style={{
                  width: "90%",
                  paddingTop: "0px",
                  paddingLeft: "0px",
                  fontSize: "16px",
                }}
              >
                <a href="mailto:rotaract@bitmesra.ac.in">
                  rotaract@bitmesra.ac.in
                </a>
              </div>
            </div>
            <div
              style={{
                paddingLeft: "24px",
                paddingTop: "24px",
                display: "flex",
              }}
            >
              <div style={{ width: "10%", fontSize: "20px", color: "#ec4899" }}>
                <FaLocationArrow />
              </div>
              <div
                style={{
                  width: "90%",
                  paddingTop: "0px",
                  paddingLeft: "0px",
                  fontSize: "16px",
                }}
              >
                <a href="https://www.google.com/maps/place/BIT+Mesra+Rd,+Mesra,+Jharkhand/@23.4283494,85.4205196,17z/data=!3m1!4b1!4m5!3m4!1s0x39f4e4bc0609e77d:0x3ee20fae80dbb4b!8m2!3d23.4283445!4d85.4227136">
                  BIT Mesra Campus, Ranchi, JH - 835215
                </a>
              </div>
            </div>
          </div>
          <form style={{borderRadius : '5%'}}
            data-aos="fade-down"
            className="review  bg-white sm:min-w-[30rem] min-w-[28rem]  min-h-[15rem] sm:object-bottom       md:float-right sm:min-h-[28rem]  space-y-7 drop-shadow-2xl  pr-8 pl-8 "
          >
            <h2 className=" sm:text-center  text-pink-500">Write a Review</h2>
            <input
              className="palceholder:text-slate-800 border-2 border-pink-500 sm:w-[100%] text-sm pt-1 pb-1 pl-1 "
              placeholder="Name"
            />
            <div className="email  sm:float-center border-pink-500">
              <input
                className="text-sm w-[100%] pt-1 pb-1 pl-1 border-2 border-pink-500 "
                placeholder="Email"
              ></input>
            </div>
            <textarea
              className="sm:w-[100%] border-2 border-pink-500 text-sm  pt-1 pb-1 pl-1 resize"
              placeholder="Write a reviews"
              rows={4}
            />
            <div className="sm:flex justify-center ">
              <button className="sm:w-[70%] border-2  hover:text-slate-800 hover:cursor-pointer sm:h-[3rem] bg-pink-500 text-slate-100">
                Button
              </button>
            </div>
          </form>
        </div>



        

        <Footer />
      </div>
    </>
  );
}
