import React, { useEffect } from "react";

const EventSection = () => {
  useEffect(() => {
    // Adding a simple fade-in effect using Tailwind
    document.querySelectorAll(".fade-in").forEach((el, index) => {
      el.style.transition = "opacity 1s ease-in-out";
      el.style.opacity = "0";

      setTimeout(() => {
        el.style.opacity = "1";
      }, index * 300); // Staggered animation
    });
  }, []);

  return (
    <div className="bg-black text-white py-12 px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold fade-in">No.1 Events Management</h1>
        <p className="mt-4 text-lg fade-in">
          Discover the best ways to make your moments unforgettable.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition fade-in">
          Get Started!
        </button>
      </div>

      <div className="bg-black text-white py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="fade-in space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-yellow-400">Our Mission</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat insignia.
            </p>
          </div>

          <div className="fade-in space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-yellow-400">Our Vision</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat insignia.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-4 border border-white rounded fade-in">
            <p className="text-sm">
              Study with us! Visit our world-class facility for South African
              Scientist and Spectrum.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
