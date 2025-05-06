import React from "react";

const AddGallery = () => {
  return (
    <div className="max-w-md mx-auto mt-12 bg-black text-white p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 mx-auto bg-[#CC5500] rounded-full flex items-center justify-center text-white text-xl">
          🔒
        </div>
        <h2 className="text-2xl font-semibold mt-2">Add Gallary</h2>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* File Upload */}
        <div className="flex items-center space-x-2">
          <input type="file" id="galleryFile" className="hidden" />
          <label
            htmlFor="galleryFile"
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

        {/* Input field */}
        <input
          type="text"
          placeholder="Gallary name*"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 placeholder-gray-400"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#CC5500] text-white py-2 rounded hover:bg-orange-700">
          POST
        </button>
      </form>
    </div>
  );
};

export default AddGallery;
