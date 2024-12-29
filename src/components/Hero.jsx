import React from 'react'
import  "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the interval in milliseconds (3 seconds)
  };
  const images = [
    "/images/c1.jpg",
    "/images/c2.webp",
    "/images/c1.jpg",
    "/images/c2.webp",
  ];

  return (
    <section className="relative w-auto overflow-x-hidden h-[500px] md:h-auto max-w-[120rem] mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full relative">
            <img
              src={src}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>

      {/* Optional Text Overlay */}
      {/* <div className="absolute top-1/2 left-0 right-0 text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Our Store
        </h2>
        <p className="text-lg md:text-2xl">Discover the latest trends and offers.</p>
      </div> */}
    </section>
  );
}

export default Hero