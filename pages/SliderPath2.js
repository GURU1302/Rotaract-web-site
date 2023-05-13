import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "aos/dist/aos.css";
import Card from "../components/card";
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
            swipeToSlide: true,
            slidesToScroll: 1,
            prevArrow: <ArrowButtonPrev />,
            nextArrow: <ArrowButtonNext />
          };
          return (
            <div>
              <Slider {...settings}>
                <div>
                <div style={{marginBottom: '1rem'}} className="flex justify-center gap-32 snap-center  ">
          <Card name="Aryan Raj" post="President" />
          <Card name="Souvik Dey" post={"Joint-President"} />
          <Card name="Abhishek Pandey" post={"Vice-President"} />
          <Card name="Sakshi" post={"Vice-President"} />
        </div>
                </div>
                <div>
                <div style={{marginBottom: '1rem'}} className="flex justify-center gap-32 snap-center ">
          <Card name="Abheet Pandey" post={"District co-ordinator"} />
          <Card name="Abhishek Ranjan" post={"District co-ordinator"} />
          <Card name="Mihir Verma" post={"Director"} />
          <Card name="Pandey" post={"VP"} />
        </div>
                </div>
                <div>
                <div style={{marginBottom: '1rem'}} className="flex justify-center gap-32 snap-center ">
          <Card name="Pandey" post={"VP"} />
          <Card name="Pandey" post={"VP"} />
          <Card name="Pandey" post={"VP"} />
          <Card name="Pandey" post={"VP"} />
        </div>
                </div>
              </Slider>
            </div>
          );
        }
      };