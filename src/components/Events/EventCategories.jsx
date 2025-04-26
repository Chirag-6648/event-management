import React from "react";
import cricket from "../../assets/categories/cricket.jpg";

const EventCategories = () => {
  const categories = [
    {
      title: "Cricket",
      image: `${cricket}`, // Replace with actual image path
    },
    {
      title: "Office Party",
      image: "/images/office-party.png", // Replace with actual image path
    },
    {
      title: "December Events",
      image: "/images/december-events.png", // Replace with actual image path
    },
    {
      title: "Food Zone",
      image: "/images/food-zone.png", // Replace with actual image path
    },
    {
      title: "Garba",
      image: "/images/garba.png", // Replace with actual image path
    },
    {
      title: "XYZ",
      image: "/images/xyz.png", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Event Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden border border-gray-700 rounded-lg">
            {/* Image */}
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
  );
};

export default EventCategories;
