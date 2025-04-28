import React from "react";

const EventDetails = () => {
  return (
    <div className="max-w-5xl bg-black mx-auto p-6">
      <div className="w-full h-110 bg-cover overflow-hidden rounded-lg mb-6">
        <img
          src="https://neoprimesport.com/wp-content/uploads/2020/02/IPL-STARS-2020.jpeg"
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-4xl font-bold">INDIAN PREMIER LEAGUE</h1>
        <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded">
          Book Ticket
        </button>
      </div>

      <div className="text-2xl font-semibold mb-2">₹2499</div>
      <div className="text-gray-600 text-lg mb-8">Indian Premier League</div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">When and Where</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span>📅</span> Date and Time
            </h3>
            <p>
              Start Date: <span className="font-medium">2025-03-15</span>
            </p>
            <p>
              Start Time: <span className="font-medium">19:32</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span>📅</span> Date and Time
            </h3>
            <p>
              End Date: <span className="font-medium">2024-05-09</span>
            </p>
            <p>
              End Time: <span className="font-medium">11:11</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span>📍</span> Location
        </h3>
        <p className="mt-2 font-medium">Motera Stadium Ahmedabad</p>
      </div>
    </div>
  );
};
export default EventDetails;
