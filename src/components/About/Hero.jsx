import React, { useEffect, useState } from "react";
import "./hero.css";
import mountain from "../../assets/mountain.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Trigger animation on mount
  }, []);

  return (
    <div
      className={`relative h-[90vh] bg-cover flex items-center justify-center animated-background`}>
      <div
        className="absolute inset-0 bg-black/50 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${mountain})` }}
      />

      <div
        className={`relative z-10 text-center text-white mb-10 transition-all duration-1000 ease-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
        <p className="uppercase text-xl tracking-widest text-gray-300 font-bold">
          All you need to know
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          <span className="text-yellow-400">ABOUT</span> HARMONI
        </h1>

        <div className="mt-3 text-sm text-gray-300 space-x-2">
          <span className="hover:text-yellow-300 font-bold text-xl cursor-pointer">
            <Link to="/">Home</Link>
          </span>
          <span className="text-yellow-400">|</span>
          <span className="hover:text-yellow-300 text-xl font-bold cursor-pointer">
            <Link to="/about">About Us</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
