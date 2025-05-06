import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 bg-[#CC5500] p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-3 text-white text-sm">
          <li className="hover:underline cursor-pointer">
            <Link to={"/admin"}>User List</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to={"/admin/addevent"}>Event Post</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to={"/admin/category"}>Post Category</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to={"/admin/addgallery"}>Add Gallery</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to={"/admin/contactlist"}>Contact List</Link>
          </li>
          <li className="mt-6 text-gray-200">Authentication</li>
          <li className="hover:underline cursor-pointer text-red-200">
            Log Out
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        <div className="bg-[#CC5500] rounded-md p-6 mb-6 flex justify-between items-center shadow-md">
          <h1 className="text-2xl font-bold">Event Management Admin</h1>
          <div className="w-10 h-10 rounded-full bg-white">
            <Link to={"/admin/profile"}>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.IkLYdobJ8Ux8CAX0AfuXIQHaHa&pid=Api&P=0&h=180"
                className="rounded-full"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto rounded-md shadow-lg">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
