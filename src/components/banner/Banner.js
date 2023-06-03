import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.css';
import "./banner.css";

import carousel1 from "../../assets/images/carousel-1.png";
import carousel2 from "../../assets/images/carousel-2.png";
import carousel3 from "../../assets/images/carousel-3.png";

const Banner = () => {
  return (
    // <div style={{paddingBottom: 1000}}>
    <Carousel nextLabel={false} prevLabel={false} fade>
      <Carousel.Item interval={800}>
        <img
          style={{ filter: "grayscale(80%)" }}
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          style={{ filter: "grayscale(80%)" }}
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          style={{ filter: "grayscale(80%)" }}
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    // </div>
  );
};

export default Banner;

// <div class="carousel-inner">
//   <div class="carousel-item">
//     <img class="w-100" src={slide.image} alt="Image" />
//     <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//       <div class="p-3" style={{ maxWidth: 900 }}>
//         <h5 class="text-white text-uppercase">{slide.title}</h5>
//         <h1 class="display-1 text-white mb-md-4">
//         {slide.description}
//         </h1>
//         <a
//           href=""
//           class="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill"
//         >
//           Get Quote
//         </a>
//         <a
//           href=""
//           class="btn btn-secondary py-md-3 px-md-5 rounded-pill"
//         >
//           Contact Us
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

//   <div >
//   <img
//     src={slide.image}
//   />
//   <h2>{slide.title}</h2>
//   <div>{slide.description}</div>
// </div>
