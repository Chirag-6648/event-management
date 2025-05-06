import React, { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-black bg-opacity-50"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="bg-black/80 bg-opacity-60 p-10 shadow-lg w-full sm:w-96 rounded-4xl">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-sm mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-md text-white bg-transparent focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200">
            Login
          </button>
          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-sm text-orange-400 hover:underline">
              Forgot Password?
            </a>
            <a href="#" className="text-sm text-orange-400 hover:underline">
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
