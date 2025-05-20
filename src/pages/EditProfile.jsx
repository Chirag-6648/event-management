import React, { useState, useEffect } from "react";
import mountain from "../assets/mountain.jpg";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        gender: user.gender || "",
        phone: user.phone || "",
        remember: false,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user data:", formData);
  };

  if (!formData) return <div className="text-white p-4">Loading...</div>;

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
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-white"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-white"
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
                onChange={handleChange}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

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
