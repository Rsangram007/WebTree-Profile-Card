import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const UserProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!userData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const { picture, name, gender, phone, location, email } = userData;

  return (
    <div className="w-[650px] h-auto bg-gradient-to-r from-white to-blue-50 border border-gray-300 rounded-xl shadow-lg p-8 flex space-x-6 transform transition-transform hover:scale-105 hover:shadow-xl">
      <img
        src={picture.large}
        alt={`${name.first} ${name.last}`}
        className="w-40 h-45 rounded-xl border-2 border-blue-200 object-cover transition-transform hover:rotate-3"
      />

      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-3xl font-bold text-blue-800 hover:text-blue-600 transition-colors">
          {name.title} {name.first} {name.last}
        </h2>

        <p className="text-gray-700">
          <span className="font-semibold">Gender:</span> {gender}
        </p>

        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
          <FaEnvelope className="text-blue-500 hover:text-blue-700 transition-colors" />
          <p>{email}</p>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
          <FaPhone className="text-green-500 hover:text-green-700 transition-colors" />
          <p>{phone}</p>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors">
          <FaMapMarkerAlt className="text-red-500 hover:text-red-700 transition-colors" />
          <p>
            {location.city}, {location.state}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
