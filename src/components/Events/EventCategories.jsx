import React from "react";
import cricket from "../../assets/categories/cricket.jpg";
import office from "../../assets/categories/office.jpg";
import party from "../../assets/categories/party.jpg";
import food from "../../assets/categories/food.jpg";
import garba from "../../assets/categories/garba.jpg";
import djParty from "../../assets/categories/djParty.jpg";
import { Link, Navigate } from "react-router-dom";
import mountain from "../../assets/mountain.jpg";

const EventCategories = () => {
  const categories = [
    {
      title: "Cricket",
      image: `${cricket}`, // Replace with actual image path
    },
    {
      title: "Office Party",
      image: `${office}`, // Replace with actual image path
    },
    {
      title: "December Events",
      image: `${party}`, // Replace with actual image path
    },
    {
      title: "Food Zone",
      image: `${food}`, // Replace with actual image path
    },
    {
      title: "Garba",
      image: `${garba}`, // Replace with actual image path
    },
    {
      title: "DJ Party",
      image: `${djParty}`, // Replace with actual image path
    },
  ];

  return (
    <Link to="/events">
      <div
        className="w-full h-110 bg-cover overflow-hidden flex justify-center items-center rounded-lg"
        style={{ backgroundImage: `url(${mountain})` }}>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          <span className="text-yellow-400">Event </span> Categories
        </h1>
      </div>
      <div className="bg-black text-white py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border border-gray-700 rounded-lg">
              <img
                src={category.image}
                alt={category.title}
                className="w-auto h-auto object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-black">
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default EventCategories;
