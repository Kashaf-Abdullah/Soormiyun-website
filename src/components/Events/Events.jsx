import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./events.css";
import e1 from '../../img/e1.jpg'
import e2 from '../../img/e2.jpg'
import e3 from '../../img/e3.jpg'
import e4 from '../../img/e4.jpg'
import e5 from '../../img/e5.jpg'
import e6 from '../../img/e6.jpg'
import e7 from '../../img/e7.jpg'
import e8 from '../../img/e8.jpg'
import e9 from '../../img/e9.jpg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      e1
  },
  {
    url:
     e2
  },
  //Second image url
  {
    url:
      e3
   }, {
    url:
   e4
  },{
    url:
   e5
  },,{
    url:
   e6
  },,{
    url:
   e7
  },,{
    url:
   e8
  },,{
    url:
   e9
  }
];
const Slider = () => {
  return (
    <div className="parent">
    <h1>OUR COMMUNITY HIGHLIGHTS</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
