import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EventOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div
      className="bg-black text-white min-h-screen font-sans px-8 md:px-16 py-10 space-y-12"
      data-aos="fade-up">
      {/* Top Content Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        data-aos="zoom-in">
        {/* Left Side - About */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ff4c29] leading-relaxed">
            Harmony Event Management firm & Wedding Planner is a group of
            creative minds who would like to make weddings, birthday & any kind
            of events courteous & a better place for our clients to celebrate
            important moment of their lives...
          </h2>
          <p
            className="text-[#ff4c29] mt-4 underline hover:cursor-pointer text-sm font-medium"
            data-aos="fade-up">
            Request Early Access to get Started
          </p>
        </div>

        {/* Right Side - Services */}
        <div className="space-y-6" data-aos="fade-left">
          <div className="grid grid-cols-2 gap-4" data-aos="zoom-in">
            <h4 className="font-bold border-b-2 border-[#ff4c29] inline-block pb-1">
              Photography
            </h4>
            <p className="text-sm text-blue-400">
              A team of 5 talented photographers are ready to snap the best
              moments of your ceremony
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="zoom-in-up">
            <h4 className="font-bold border-b-2 border-[#ff4c29] inline-block pb-1">
              Cinematography or Videography service
            </h4>
            <p className="text-sm text-blue-400">
              Creative full HD 1080p Video, a different space of your ceremony
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="zoom-in-right">
            <h4 className="font-bold border-b-2 border-[#ff4c29] inline-block pb-1">
              Full Venue Decoration Service
            </h4>
            <p className="text-sm text-blue-400">
              A blend of out-of-box ideas to decorate your precious date
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="zoom-in-down">
            <h4 className="font-bold border-b-2 border-[#ff4c29] inline-block pb-1">
              Home Decoration
            </h4>
            <p className="text-sm text-blue-400">
              Just call us and get total event solution under one roof..
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="bg-pink-500 text-white rounded-xl px-8 py-6 flex flex-col md:flex-row items-center justify-between shadow-lg"
        data-aos="flip-up">
        <div className="text-center md:text-left">
          <p className="text-sm">Request Early Access to get Started</p>
          <p className="text-lg font-semibold">
            Registered Today & start exploring the endless possibilities.
          </p>
        </div>
        <button className="bg-black text-white mt-4 md:mt-0 px-6 py-2 rounded-full hover:bg-gray-800 transition">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default EventOverview;
