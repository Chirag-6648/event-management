import React from "react";
import { Link } from "react-router-dom";
import mountain from "../assets/mountain.jpg";

const UserAccount = () => {
  return (
    <div
      className="min-h-screen bg-black text-white bg-cover flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${mountain})` }}>
      <div className="w-full max-w-md bg-gray-950/70 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">My Account</h2>

        <div className="space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-gray-800 flex items-center justify-center text-3xl font-bold">
              U
            </div>
          </div>

          {/* User Information */}
          <div className="space-y-2">
            <div>
              <span className="text-gray-400">Name:</span>
              <p className="text-lg font-semibold">Chirag Rathod</p>
            </div>

            <div>
              <span className="text-gray-400">Email:</span>
              <p className="text-lg font-semibold">rathodchirag@gmail.com</p>
            </div>

            <div>
              <span className="text-gray-400">Gender:</span>
              <p className="text-lg font-semibold">Male</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 mt-8">
            <Link to={"/editprofile"}>
              <button className="w-full bg-orange-600 hover:bg-orange-700 transition-colors font-semibold py-3 rounded-lg">
                Edit Profile
              </button>
            </Link>
            <button className="w-full bg-gray-800 hover:bg-gray-700 transition-colors font-semibold py-3 rounded-lg">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
