import React, { useState } from "react";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-[#0B0D17] flex justify-center items-center px-4">
      <div className="w-[420px] bg-[#11131E] rounded-3xl p-8 shadow-xl border border-gray-800">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Edit Profile
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <label>
            <img
              src={profileImage || "/profile.jpg"}
              alt="profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-pink-500 cursor-pointer"
            />
            <input type="file" onChange={handleImage} className="hidden" />
          </label>
        </div>

        {/* First Name */}
        <input
          type="text"
          placeholder="First Name"
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl outline-none border border-gray-700 focus:border-pink-500"
        />

        {/* Last Name */}
        <input
          type="text"
          placeholder="Last Name"
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl outline-none border border-gray-700 focus:border-orange-400"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl outline-none border border-gray-700 focus:border-pink-500"
        />

        {/* Bio */}
        <textarea
          placeholder="Write something about yourself..."
          rows="4"
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl outline-none border border-gray-700 focus:border-orange-400"
        ></textarea>

        {/* Save Button */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
