import React, { useState } from "react";
import mountain from "../assets/mountain.jpg";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Chirag Rathod",
    email: "chiragrathod@gmail.com",
    gender: "Male",
    phone: "55454545445",
    remember: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user data:", formData);
  };

  return (
    <div
      className="min-h-screen bg-black text-white bg-cover flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${mountain})` }}>
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-4xl mx-auto mt-10 bg-gray-950/70 p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-4">
          <div className="text-purple-600 text-3xl mb-2">🔒</div>
          <h2 className="text-xl font-semibold">Change User Detail</h2>
        </div>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2">Gender</label>
        <div className="flex space-x-4 mb-4">
          {["Female", "Male", "Other"].map((option) => (
            <label key={option} className="flex items-center space-x-1">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={formData.gender === option}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        <label className="block mb-2">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            className="mr-2"
          />
          Remember me
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          CHANGE
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
