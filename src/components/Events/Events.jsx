import React from "react";
import { Link } from "react-router-dom";
import mountain from "../../assets/mountain.jpg";

const events = [
  {
    id: 1,
    title: "INDIAN PREMIER LEAGUE",
    date: "2025-03-15, 19:32",
    location: "Motera Stadium Ahmedabad",
    price: "Rs. 2499",
    imageUrl:
      "https://neoprimesport.com/wp-content/uploads/2020/02/IPL-STARS-2020.jpeg",
  },
  {
    id: 2,
    title: "WOMEN PREMIER LEAGUE",
    date: "2025-02-22, 07:30",
    location: "Wankhade Cricket Stadium, Mumbai",
    price: "Rs. 599",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.0Or7VGGcBi8haeStDNH4AwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "GOKULDHAM PREMIER LEAGUE",
    date: "2024-10-10, 08:00",
    location: "Gokuldham Society Mumbai",
    price: "Rs. 200",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.b_6nX5clzwY4oneK7HeBvgHaDi&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "CRICKET GROUND",
    date: "2024-12-02, 00:00",
    location: "Ahmedabad",
    price: "Rs. 5000",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.clQ7Hpy17cGBVdFfmMX4ugHaER&pid=Api&P=0&h=180",
  },
];

const Events = () => {
  return (
    <Link to="/eventDetails">
      <div
        className="w-full h-110 bg-cover overflow-hidden flex justify-center items-center rounded-lg"
        style={{ backgroundImage: `url(${mountain})` }}>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          <span className="text-yellow-400">Cricket</span> Events
        </h1>
      </div>
      <div className="min-h-screen bg-black p-8 text-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-70 text-white text-sm p-2 w-full">
                    {event.date}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2">{event.title}</h2>
                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold text-gray-300">
                      Location:{" "}
                    </span>
                    {event.location}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    <span className="font-semibold text-gray-300">Price: </span>
                    {event.price}
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
                    Book Ticket →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Events;
