import React, { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState("personal");

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 bg-gray-500 rounded-full">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.IkLYdobJ8Ux8CAX0AfuXIQHaHa&pid=Api&P=0&h=180"
            className="rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setTab("personal")}
          className={`px-4 py-2 rounded ${
            tab === "personal"
              ? "bg-[#FF8C00] text-black"
              : "bg-gray-800 text-white"
          }`}>
          Personal Detail
        </button>
        <button
          onClick={() => setTab("password")}
          className={`px-4 py-2 rounded ${
            tab === "password"
              ? "bg-[#FF8C00] text-black"
              : "bg-gray-800 text-white"
          }`}>
          Change Password
        </button>
      </div>

      {tab === "personal" && (
        <div className="bg-black text-white p-8 rounded-xl max-w-3xl mx-auto shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Personal Details
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-orange-400">Full Name:</label>
              <input
                type="text"
                defaultValue="Event Management"
                className="p-2 rounded bg-gray-800 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-orange-400">
                Email Address:
              </label>
              <input
                type="email"
                defaultValue="event@gmail.com"
                className="p-2 rounded bg-gray-800 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded shadow">
                Update
              </button>
            </div>
          </form>
        </div>
      )}

      {tab === "password" && (
        <div className="bg-black text-white p-8 rounded-xl max-w-3xl mx-auto shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Change Password
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-orange-400">
                Old Password:
              </label>
              <input
                type="password"
                className="p-2 rounded bg-gray-800 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter old password"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-orange-400">
                New Password:
              </label>
              <input
                type="password"
                className="p-2 rounded bg-gray-800 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter new password"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-orange-400">
                Confirm New Password:
              </label>
              <input
                type="password"
                className="p-2 rounded bg-gray-800 border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm password"
              />
            </div>
            <div className="md:col-span-3 text-right">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded shadow">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
