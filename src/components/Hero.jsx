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
    "/hero/Morris-Becker-.jpg",
    "/hero/Safty.jpg",
    "/hero/Walkers (1).jpg"
  ];

  return (
    <>
    <section className="relative   overflow-hidden h-full  max-w-[120rem] mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full relative">
            <img
              src={src}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-cover "
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
    <ThreeBoxesSection/>
    </>
    
  );
}

export default Hero

const ThreeBoxesSection = () => {
  const boxes = [
    {
      title: 'Box 1',
      description: 'Description for Box 1. Highlight key details here.',
      image: "hero/three.webp",
      link: '#',
    },
    {
      title: 'Box 2',
      description: 'Description for Box 2. Highlight key details here.',
      image: "hero/three.webp",
      link: '#',
    },
    {
      title: 'Box 3',
      description: 'Description for Box 3. Highlight key details here.',
      image: "hero/three.webp",
      link: '#',
    },
  ];

  return (
    <div className="max-w-[120rem] mx-auto px-2 py-2">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {boxes.slice(0, window.innerWidth < 1024 ? 2 : 3).map((box, index) => (
          <div
            key={index}
            className="bg-white   overflow-hidden transform transition duration-300 hover:scale-95  p-2"
          >
            <img src={box.image} alt={box.title} className="w-full object-cover" />
         
          </div>
        ))}
      </div>
    </div>
  );
};




