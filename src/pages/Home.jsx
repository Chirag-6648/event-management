import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Component2 from "../components/Home/Component2";
import EventOverview from "../components/Home/EventOverview";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Hero />
      <Component2 />
      <EventOverview />
    </div>
  );
};

export default Home;
