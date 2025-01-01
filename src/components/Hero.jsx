import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";

const Hero = () => {
  // Custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2  p-2 rounded-full text-white hover:bg-opacity-80 transition"
    >
      <IoIosArrowBack size={30} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2  p-2 rounded-full text-white hover:bg-opacity-80 transition"
    >
      <IoIosArrowForward size={30} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />, // Add custom prev arrow
    nextArrow: <CustomNextArrow />, // Add custom next arrow
  };

  const images = [
    "/hero/Morris-Becker-.jpg",
    "/hero/Safty.jpg",
    "/hero/Walkers (1).jpg",
    "/hero/slide4.jpg",
  ];

  return (
    <>
      <section className="relative overflow-hidden h-full max-w-[96rem] mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="w-full h-full relative">
              <img
                src={src}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>
      <ThreeBoxesSection />
    </>
  );
};

export default Hero;

const ThreeBoxesSection = () => {
  const boxes = [
    {
      title: "Box 1",
      description: "Description for Box 1. Highlight key details here.",
      image: "/three/2.jpg",
      link: "#",
    },
    {
      title: "Box 2",
      description: "Description for Box 2. Highlight key details here.",
      image: "/three/1.jpg",
      link: "#",
    },
    {
      title: "Box 3",
      description: "Description for Box 3. Highlight key details here.",
      image: "/three/3.jpg",
      link: "#",
    },
  ];

  return (
    <div className="max-w-[96rem] mx-auto px-2 py-2">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden transform transition duration-300 hover:scale-95 p-2"
          >
            <img
              src={box.image}
              alt={box.title}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
