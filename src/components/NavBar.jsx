import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );

        ;
      navigate("/Login");

    } catch (err) {
      console.error("Logout error: ", err);
    }
  };

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-linear-to-br from-pink-500 via-red-500 to-orange-400 px-8 py-4 flex items-center justify-between">

      {/* LEFT: LOGO */}
      <Link to={"/"} className="text-3xl font-bold cursor-pointer">
        <span className="text-[#e2e1e1]">&lt;Dev</span>
        <span className="text-[#1f1e1e]">Tinder</span>
        <span className="text-[#f4edee]">&gt;</span>
      </Link>

      {/* RIGHT SIDE */}
      {user && (
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <p className="text-white text-sm select-none">
              Welcome, {user.firstName}
            </p>

            <img
              src={user.photoUrl}
              alt="profile"
              className="w-10 h-10 rounded-full border border-white object-cover"
            />
          </div>

          {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute right-0 mt-3 bg-[#11131E] border border-gray-700 rounded-xl shadow-xl w-44 py-2 animate-fadeIn">

              <Link to = {"/"} className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition text-gray-200">
                Feed
              </Link>

              <Link to = {"/connection"} className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition text-gray-200">
                connections
              </Link>
              
              <Link to = {"/editProfile"} className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition text-gray-200">
                Edit profile
              </Link>

              <hr className="border-gray-700 my-1" />

              {/* FIXED LOGOUT BUTTON */}
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition text-red-400"
              >
                Logout
              </button>

            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
