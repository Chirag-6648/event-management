import React from "react";

const contactData = [
  {
    fullName: "sparks user",
    email: "spark@gmail.com",
    mobile_no: "8989898989",
    message: "new contact",
  },
  { fullName: "", email: "ssc786@gmail.com", mobile_no: "", message: "" },
  {
    fullName: "uday shrimali",
    email: "udshrimali@gmail.com",
    mobile_no: "7676767676",
    message: "New Contact",
  },
  {
    fullName: "uday",
    email: "udayshrimali@gmail.com",
    mobile_no: "7777777777",
    message: "hello admin!!",
  },
  {
    fullName: "uday",
    email: "udayshrimali@gmail.com",
    mobile_no: "7777777777",
    message: "hello admin!!",
  },
  {
    fullName: "",
    email: "rhythem2003@gmail.com",
    mobile_no: "09484769544",
    message: "4345",
  },
  {
    fullName: "",
    email: "rhythem2003@gmail.com",
    mobile_no: "09484769544",
    message: "👋",
  },
  {
    fullName: "",
    email: "a@gmail.com",
    mobile_no: "9484769544",
    message: "hi i",
  },
  {
    fullName: "",
    email: "rhythem2003@gmail.com",
    mobile_no: "09484769544",
    message: "hi",
  },
  {
    fullName: "prince",
    email: "prince@gmail.com",
    mobile_no: "1234567890",
    message: "hello admin!!",
  },
  {
    fullName: "prince",
    email: "prince@gmail.com",
    mobile_no: "1234567890",
    message: "hello admin!!",
  },
  {
    fullName: "prince",
    email: "prince@gmail.com",
    mobile_no: "1234567890",
    message: "hello admin!!",
  },
];

const ContactList = () => {
  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#FF8C00]">
        Contact List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#FF8C00] text-sm">
          <thead className="bg-[#FF8C00] text-black">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">fullName</th>
              <th className="px-4 py-2 border">email</th>
              <th className="px-4 py-2 border">mobile_no</th>
              <th className="px-4 py-2 border">message</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact, index) => (
              <tr key={index} className="hover:bg-[#1a1a1a]">
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{contact.fullName || "-"}</td>
                <td className="px-4 py-2 border">{contact.email}</td>
                <td className="px-4 py-2 border">{contact.mobile_no || "-"}</td>
                <td className="px-4 py-2 border">{contact.message || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
