import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const EditProfile = () => {
  const user = useSelector((store) => store.user); // ⬅ preload user data here
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    skills: "",
    about: "",
    photoUrl: ""
  });

  // 🔥 PRELOAD DATA FROM REDUX INTO FORM
  useEffect(() => {
    if (user) {
      setForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        age: user.age || "",
        gender: user.gender || "",
        skills: user.skills || "",
        about: user.about || "",
        photoUrl: user.photoUrl || ""
      });
    }
  }, [user]);

  // 🔥 LIVE IMAGE PREVIEW
  const preview = form.photoUrl || "/profile.jpg";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        form,
        { withCredentials: true }
      );

      dispatch(removeUser()); // remove old user
      window.location.reload(); // reload to fetch updated user (simple fix)

    } catch (err) {
      alert("ERROR: " + err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D17] flex justify-center items-center px-4">
      <div className="w-[420px] bg-[#11131E] rounded-3xl p-8 shadow-xl border border-gray-800">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Edit Profile
        </h2>

        {/* Profile Image Preview */}
        <div className="flex justify-center mb-6">
          <img
            src={preview}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
          />
        </div>

        {/* Image URL */}
        <input
          type="text"
          name="photoUrl"
          placeholder="Profile Image URL"
          value={form.photoUrl}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl border border-gray-700 focus:border-pink-500"
        />

        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl border border-gray-700 focus:border-pink-500"
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl border border-gray-700 focus:border-orange-400"
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl border border-gray-700 focus:border-pink-500"
        />

        {/* Gender */}
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl border border-gray-700"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Skills */}
        <input
          type="text"
          name="skills"
          placeholder="Your skills (eg. React, Node)"
          value={form.skills}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl border border-gray-700 focus:border-orange-400"
        />

        {/* About */}
        <textarea
          name="about"
          placeholder="About You..."
          rows="4"
          value={form.about}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 bg-[#1A1C27] text-white rounded-xl border border-gray-700 focus:border-orange-400"
        ></textarea>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-pink-500 to-orange-400 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
