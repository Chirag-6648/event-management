import React, { useState } from "react";
import mountain from "../assets/mountain.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        formData
      );
      console.log("Success:", response.data);
      toast.success("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white bg-cover flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${mountain})` }}>
      <div className="w-full max-w-md bg-gray-950/70 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 text-sm font-medium">Gender</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-orange-500 bg-gray-900 focus:ring-orange-500"
                  required
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-orange-500 bg-gray-900 focus:ring-orange-500"
                  required
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 transition-colors font-semibold py-3 rounded-lg">
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
