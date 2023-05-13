import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "aos/dist/aos.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

class Question extends React.Component {
  render() {
    return <h2> <IoIosArrowForward />  </h2>
  }
}
class Question2 extends React.Component {
  render() {
    return <h2> < IoIosArrowBack />  </h2>
  }
}



const ArrowButtonNext = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        zIndex: '1',
        position:'absolute',
        bottom:'40%',
        left: '97.5%',
          filter:
            onClick === null
              ? "invert(0.7)"
              : "none"
        }}
    >
      <Question />
    </button>
  );
};
const ArrowButtonPrev = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ 
        zIndex: '1',
       position: 'absolute',
       bottom:'40%',
          filter:
            onClick === null
              ? "invert(0.7)"
              : "none"
        }}
    >
      <Question2 />
    </button>
  );
};





export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      prevArrow: <ArrowButtonPrev />,
      nextArrow: <ArrowButtonNext />
    };
    return (
      <div style={{position: 'relative'}} >
        <Slider {...settings}>
          <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
        
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md flex-col max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop : '-10%'}} className="">
              <h4 className="text-center text-md">Web-developers</h4>
              <h5 className="text-center text-sm">Abhishek Pandey</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
            
          </div>
        </div>
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop: '-10%'}}>
              <h4 className="text-center text-md">Web-developers</h4>
              <h5 className="text-center text-sm">Anirban Halder</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
            
          </div>
        </div>
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop : '-10%'}}>
              <h4 className="text-center text-md">Designer</h4>
              <h5 className="text-center text-sm">Prerna Verma</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
           
          </div>
        </div>
      </div>
          </div>
          <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
        
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md flex-col max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop : '-10%'}} className="">
              <h4 className="text-center text-md">Web-developers</h4>
              <h5 className="text-center text-sm">Abhishek Pandey</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
            
          </div>
        </div>
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop: '-10%'}}>
              <h4 className="text-center text-md">Web-developers</h4>
              <h5 className="text-center text-sm">Anirban Halder</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
            
          </div>
        </div>
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop : '-10%'}}>
              <h4 className="text-center text-md">Designer</h4>
              <h5 className="text-center text-sm">Prerna Verma</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
           
          </div>
        </div>
      </div>
          </div>
          <div>
          <div style={{ display: "flex", justifyContent: "space-around"}}>
        
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md flex-col max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop : '-10%'}} className="">
              <h4 className="text-center text-md">Web-developers</h4>
              <h5 className="text-center text-sm">Abhishek Pandey</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
            
          </div>
        </div>
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop: '-10%'}}>
              <h4 className="text-center text-md">Web-developers</h4>
              <h5 className="text-center text-sm">Anirban Halder</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
            
          </div>
        </div>
        <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
        <div style={{marginTop : '-10%'}}>
              <h4 className="text-center text-md">Designer</h4>
              <h5 className="text-center text-sm">Prerna Verma</h5>
            </div>
          <div
            style={{
              marginTop: '10%',
              backgroundColor: "#F27BB8",
              minWidth: "200px",
              minHeight: "200px",
              borderRadius: "50%",
            }}
          >
           
          </div>
        </div>
      </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}