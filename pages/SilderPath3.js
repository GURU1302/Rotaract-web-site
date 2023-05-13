import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "aos/dist/aos.css";
import Allbum from "../components/Album card/Allbumcard";
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

export default class CenterMode extends Component {
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        prevArrow: <ArrowButtonPrev />,
        nextArrow: <ArrowButtonNext />,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
            <div className="album-container">
        <div className="gap-5 m-5 flex item-container" style={{justifyContent: 'center'}}>
          <Allbum name= "Holi"
            desc= " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           />
        </div>
      </div>
            </div>
            <div>
            <div className="album-container">
        <div className="gap-5 m-5 flex flex-wrap item-container" style={{justifyContent: 'center'}}>
          <Allbum name= "diwali"
            desc= " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           />
        </div>
            </div>
            </div>
            <div>
            <div className="album-container">
        <div className="gap-5 m-5 flex flex-wrap item-container" style={{justifyContent: 'center'}}>
          <Allbum name= "christmas"
            desc= " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           />
        </div>
            </div>
            </div>
            <div>
            <div className="album-container">
        <div className="gap-5 m-5 flex flex-wrap item-container" style={{justifyContent: 'center'}}>
          <Allbum name= "republic"
            desc= " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           />
        </div>
            </div>
            </div>
            <div>
            <div className="album-container">
        <div className="gap-5 m-5 flex flex-wrap item-container" style={{justifyContent: 'center'}}>
          <Allbum name= "independence"
            desc= " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           />
        </div>
            </div>
            </div>
            <div>
            <div className="album-container">
        <div className="gap-5 m-5 flex flex-wrap item-container" style={{justifyContent: 'center'}}>
          <Allbum name= "durga puja"
            desc= " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
           />
        </div>
            </div>
            </div>
          </Slider>
        </div>
      );
    }
  }