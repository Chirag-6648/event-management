import React from "react";

const bookings = [
  {
    id: "66f120d8512050c216db5",
    dateTime: "2024-05-09, 11:11",
    location: "Motera Stadium, Ahemdabad",
    bookingDate: "23/09/2024",
    title: "INDIAN PREMIER LEAGUE",
    price: "₹ 2499",
    qr: "https://up.yimg.com/ib/th?id=OIP.NiM9uq47Ue9HDqb04m8HhgHaHa&pid=Api&rs=1&c=1&qlt=95&w=105&h=105",
  },
  {
    id: "66f1231b512050c216db9",
    dateTime: "2024-10-30, 09:00",
    location: "GokulDham Society, Mumbai",
    bookingDate: "23/09/2024",
    title: "GOKULDHAM PREMIER LEAGUE",
    price: "₹ 200",
    qr: "https://up.yimg.com/ib/th?id=OIP.NiM9uq47Ue9HDqb04m8HhgHaHa&pid=Api&rs=1&c=1&qlt=95&w=105&h=105",
  },
];

const MyBookings = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="flex bg-gray-900 rounded-xl shadow-md p-4 items-center space-x-4">
          <img
            src={booking.qr}
            alt="QR Code"
            className="w-50 h-50 object-cover"
          />
          <div className="flex-1">
            <p>
              <span className="font-semibold">Ticket ID:</span> {booking.id}
            </p>
            <p>
              <span className="font-semibold">Date & Time:</span>{" "}
              {booking.dateTime}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {booking.location}
            </p>
            <p>
              <span className="font-semibold">Booking Date:</span>{" "}
              {booking.bookingDate}
            </p>
            <p>
              <span className="font-semibold">Title:</span>{" "}
              <span className="text-blue-600">{booking.title}</span>
            </p>
            <p>
              <span className="font-semibold">Price:</span> {booking.price}
            </p>
            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
