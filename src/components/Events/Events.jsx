// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./events.css";
// import e1 from '../../img/e1.jpg';
// import e2 from '../../img/e2.jpg';
// import e3 from '../../img/e3.jpg';
// import e4 from '../../img/e4.jpg';
// import e5 from '../../img/e5.jpg';
// // import e6 from '../../img/e6.jpg';
// // import e7 from '../../img/e7.jpg';
// // import e8 from '../../img/e8.jpg';
// // import e9 from '../../img/e9.jpg';

// const sliderImageUrl = [e1, e2, e3, e4, e5];

// const Slider = () => (
//   <div className="parent">
//     <h1>OUR COMMUNITY HIGHLIGHTS</h1>
//     <Carousel
//       responsive={{
//         desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
//         tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
//         mobile: { breakpoint: { max: 767, min: 464 }, items: 2 },
//       }}
//       autoPlay={true}
//       swipeable={true}
//       draggable={true}
//       showDots={true}
//       infinite={true}
//       partialVisible={false}
//       dotListClass="custom-dot-list-style"
//     >
//       {sliderImageUrl.map((imageUrl, index) => (
//         <div className="slider" key={index}>
//           <img src={imageUrl} alt={`Slide ${index + 1}`} />
//         </div>
//       ))}
//     </Carousel>
//   </div>
// );

// export default Slider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./events.css";
import e1 from '../../img/e1.jpg';
import e2 from '../../img/e2.jpg';
import e3 from '../../img/e3.jpg';
import e4 from '../../img/e4.jpg';
import e5 from '../../img/e5.jpg';

const sliderImageUrl = [e1, e2, e3, e4, e5];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="parent">
      <h1>OUR COMMUNITY HIGHLIGHTS</h1>
      <Slider {...settings}>
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
