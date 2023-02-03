import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./banner.css";

import carousel1 from "../../assets/images/carousel-1.jpg";

const slides = [
  { title: "First item", description: "Lorem ipsum", image: carousel1 },
  { title: "Second item", description: "Lorem ipsum", image: carousel1 },
  { title: "Third item", description: "Lorem ipsum", image: carousel1 },
];

const Banner = () => {
  return (
    <Slider>
      {slides.map((slide, index) => (
        <div>
          <img
            style={{ position: "absolute", top: 0, left: 0 }}
            src={slide.image}
          />
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
