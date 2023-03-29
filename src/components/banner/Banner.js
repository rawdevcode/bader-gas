import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./banner.css";

import carousel1 from "../../assets/images/carousel-1.png";
import carousel2 from "../../assets/images/carousel-2.png";
import carousel3 from "../../assets/images/carousel-3.png";

const slides = [
  { title: "First item", description: "Lorem ipsum", image: carousel1 },
  { title: "Second item", description: "Lorem ipsum", image: carousel2 },
  { title: "Third item", description: "Lorem ipsum", image: carousel3 },
];

const Banner = () => {
  return (
    <Slider>
      {slides.map((slide, index) => (
        <div class="carousel-inner">
          <div class="carousel-item">
            <img class="w-100" src={slide.image} alt="Image" />
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style={{ maxWidth: 900 }}>
                <h5 class="text-white text-uppercase">{slide.title}</h5>
                <h1 class="display-1 text-white mb-md-4">
                  {slide.description}
                </h1>
                {/* <a
                  href=""
                  class="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill"
                >
                  Get Quote
                </a>
                <a
                  href=""
                  class="btn btn-secondary py-md-3 px-md-5 rounded-pill"
                >
                  Contact Us
                </a> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
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
