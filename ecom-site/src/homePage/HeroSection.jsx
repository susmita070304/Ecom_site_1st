import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import mainImage from "./main.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import herosectionPhoto2 from "./herosectionPhoto2.jpg";
import herosectionPhoto3 from "./herosectionPhoto3.jpg";
import herosectionPhoto4 from "./herosectionPhoto4.jpg";
import herosectionPhoto5 from "./herosectionPhoto5.jpg";

export default function HeroSection() {
  const typedRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["HOME", "NEST", "PARADISE"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const images = [
    mainImage,
    herosectionPhoto2,
    herosectionPhoto3,
    herosectionPhoto4,
    herosectionPhoto5,
  ];

  // State to track which image is active
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle + button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-[#ffffff] h-[740px] relative overflow-hidden ">
      <div className="buyNow bg-[#b2ddc2] rounded-[5px] border border-black w-[159px] h-14 absolute left-[315px] top-[650px] z-20"></div>
      <div className="learnMore bg-[#b2ddc2] rounded-[5px] border border-black w-[159px] h-14 absolute left-[943px] top-[650px] z-20"></div>
      <div className="frontImage bg-[#b2ddc2] border-8 border-black w-[894px] h-[486px] absolute left-[262px] top-[75px] rounded-3xl "></div>

      <div className="buyNow text-black text-left font-['Roboto-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[339px] top-[662px] w-[156px] h-[101px] z-20">
        <button>Buy Now</button>
      </div>
      <div className="learnMore text-black text-left font-['Roboto-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[955px] top-[662px] w-[156px] h-[115px] z-20">
        <button onClick={() => navigate("/about")}><Link to="/about">Learn More</Link></button>
      </div>
      {/* Moto */}
      <div className="moto relative top-[580px] left-[480px] z-40 text-xl ">
        Get Everything you need to make your house a{" "}
        <span
          ref={typedRef}
          className="text-4xl font-bold text-black relative"
        ></span>
      </div>
      <div className="bg-[#b2ddc2] rounded-full w-[48px] h-[48px] relative left-[1232px] top-[550px] text-5xl font-bold ">
        {/* + Button */}
        <button
          onClick={handleNext}
          className=" h-[48px] relative top-[px] left-[7px] bottom-[5px] z-50 "
        >
          +
        </button>
      </div>
      {/* front image */}
      <img
        className="border-8 border-black w-[894px] h-[501px] absolute left-[262px] top-[75px] object-cover rounded-3xl transition-all duration-500"
        src={images[currentIndex]}
        alt="hero"
      />
    </div>
  );
}
