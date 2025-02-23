import React from "react";

const Usercard = () => {
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, Springfield, USA";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-4">
      <img
        className="w-24 h-24 rounded-full mx-auto border border-gray-300"
        src={profilePhoto}
        alt="Profile"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-500 text-sm mt-2">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
