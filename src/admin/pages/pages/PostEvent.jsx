import React from "react";

const PostEvent = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-black text-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="w-12 h-12 mx-auto bg-[#CC5500] rounded-full flex items-center justify-center text-white text-xl">
          🔒
        </div>
        <h2 className="text-2xl font-bold mt-2">Post Event</h2>
      </div>

      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <input type="file" id="file" className="hidden" />
          <label
            htmlFor="file"
            className="bg-white text-black px-3 py-1 text-sm rounded cursor-pointer">
            Choose file
          </label>
          <span className="text-sm text-gray-400">No file chosen</span>
          <button
            type="button"
            className="ml-auto bg-[#CC5500] text-white px-3 py-1 rounded text-sm hover:bg-orange-700">
            CHOOSE PIC
          </button>
        </div>

        <input
          type="text"
          placeholder="Title*"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 placeholder-gray-400"
        />

        <input
          type="date"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 text-white"
        />
        <input
          type="date"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 text-white"
        />

        <input
          type="time"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 text-white"
        />
        <input
          type="time"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 text-white"
        />

        <input
          type="text"
          placeholder="Price"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 placeholder-gray-400"
        />

        <select className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 text-white">
          <option value="">Select Category</option>
          <option value="music">Cricet</option>
          <option value="tech">Office Party</option>
          <option value="sports">December Events</option>
          <option value="music">Food Zone</option>
          <option value="tech">Garba</option>
          <option value="sports">Dj Party</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 placeholder-gray-400"
        />

        <textarea
          placeholder="Description"
          rows="4"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 placeholder-gray-400"></textarea>

        <button
          type="submit"
          className="w-full bg-[#CC5500] text-white py-2 rounded hover:bg-orange-700">
          Post Event
        </button>
      </form>
    </div>
  );
};

export default PostEvent;
