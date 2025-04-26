import React, { useEffect, useState } from "react";
import background from "../../assets/background.jpg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // slight delay for fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center flex justify-center flex-col items-center">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 z-10 bg-contain"
        style={{ backgroundImage: `url(${background})` }}></div>

      {/* Animated Content */}
      <div
        className={`relative z-20 text-center px-6 sm:px-16 max-w-2xl text-white bg-black/10 backdrop-blur-md rounded-3xl p-8 shadow-xl transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow">
          One Stop Event Planner
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Discover, attend, and create unforgettable experiences. Join a
          community that brings ideas to life through impactful events.
        </p>

        <div className="flex items-center gap-4 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-3 border-orange-400 border-1 md:w-3/4 px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3 px-4 rounded-xl text-md shadow-lg transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>

        <div className="avatar-group -space-x-6 mt-5 flex justify-center">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="avatar">
              <div className="w-12">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt={`Avatar ${i + 1}`}
                />
              </div>
            </div>
          ))}
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-12">
              <span>+99</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-300">
          1600 people requested access & visited our website in the last 24
          hours
        </p>
      </div>
    </div>
  );
};

export default Hero;
