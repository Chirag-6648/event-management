import React from "react";

const users = [
  {
    id: 1,
    name: "Vishal",
    email: "vishalbavaliya21@gmail.com",
    gender: "male",
    phone: "7755934563",
  },
  {
    id: 2,
    name: "uday",
    email: "u@gmail.com",
    gender: "male",
    phone: "7777777777",
  },
  {
    id: 3,
    name: "aj",
    email: "ajay@gmail.com",
    gender: "male",
    phone: "9999999999",
  },
  {
    id: 4,
    name: "jani",
    email: "jani@gmail.com",
    gender: "male",
    phone: "7852152960",
  },
  {
    id: 5,
    name: "titu",
    email: "titu@gmail.com",
    gender: "male",
    phone: "7852152969",
  },
  {
    id: 6,
    name: "khushbu",
    email: "khushi@gmail.com",
    gender: "female",
    phone: "1234567891",
  },
  {
    id: 7,
    name: "death",
    email: "whitedeath@gmail.com",
    gender: "male",
    phone: "777777777",
  },
];
const UserList = () => {
  return (
    <div>
      <table className="w-full table-auto text-left border-collapse">
        <thead className="bg-[#9B3922] text-white">
          <tr>
            <th className="p-3">No</th>
            <th className="p-3">Profile</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Phone Number</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-black">
          {users.map((user, index) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">
                {user.gender === "male" ? (
                  <img
                    src={`https://img.freepik.com/free-vector/smiling-boy-hoodie_1308-178004.jpg?ga=GA1.1.1238178388.1735737751&semt=ais_hybrid&w=740`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <img
                    src={`https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?ga=GA1.1.1238178388.1735737751&semt=ais_hybrid&w=740`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 capitalize">{user.gender}</td>
              <td className="p-3">{user.phone}</td>
              <td className="p-3">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
                  Unblock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
