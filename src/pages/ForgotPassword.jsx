import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-950 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Forgot Password</h2>

        <p className="text-sm text-gray-400 mb-6 text-center">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 transition-colors font-semibold py-3 rounded-lg">
            Send Reset Link
          </button>
        </form>

        {/* Back to Login Link */}
        <p className="mt-6 text-center text-sm">
          Remembered your password?{" "}
          <Link to={"/login"}>
            <a href="#" className="text-orange-400 hover:underline">
              Go back to Login
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
