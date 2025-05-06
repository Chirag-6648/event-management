import React from "react";
import cricket from "../../../assets/categories/cricket.jpg";
import office from "../../../assets/categories/office.jpg";
import djParty from "../../../assets/categories/djParty.jpg";
import food from "../../../assets/categories/food.jpg";
import party from "../../../assets/categories/party.jpg";
import garba from "../../../assets/categories/garba.jpg";

const PostCategory = () => {
  const categories = [
    { id: 1, name: "Cricket", image: `${cricket}` },
    { id: 2, name: "Office Party", image: `${office}` },
    { id: 3, name: "December events", image: `${party}` },
    { id: 4, name: "food zone", image: `${food}` },
    { id: 5, name: "Dj Party", image: `${djParty}` },
    { id: 6, name: "Garba", image: `${garba}` },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-black text-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <div className="w-12 h-12 mx-auto bg-[#CC5500] rounded-full flex items-center justify-center text-white text-xl">
          🔒
        </div>
        <h2 className="text-2xl font-bold mt-2">Post Category</h2>
      </div>

      <form className="space-y-4 mb-10">
        <div className="flex items-center space-x-2">
          <input type="file" id="categoryFile" className="hidden" />
          <label
            htmlFor="categoryFile"
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
          placeholder="Category name*"
          className="w-full bg-black border border-[#CC5500] rounded px-3 py-2 placeholder-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-[#CC5500] text-white py-2 rounded hover:bg-orange-700">
          POST
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center text-white border-collapse">
          <thead className="bg-[#CC5500] text-white">
            <tr>
              <th className="px-4 py-2 border border-black">No</th>
              <th className="px-4 py-2 border border-black">Image</th>
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">Action</th>
            </tr>
          </thead>
          <tbody className="bg-black">
            {categories.map((cat, idx) => (
              <tr
                key={cat.id}
                className="border-t border-gray-700 hover:bg-[#1a1a1a]">
                <td className="px-4 py-2 text-center">{idx + 1}</td>
                <td className="px-4 py-2 text-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="px-4 py-2 text-center">{cat.name}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-red-500 hover:text-red-700 text-xl">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostCategory;
