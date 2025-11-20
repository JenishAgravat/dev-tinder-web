import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const user=useSelector((store)=>store.user);
    const dispatch=useDispatch();
    // const navigate=useNavigate();

    const handleLogout=async ()=>{
        try{
        await axios.post(BASE_URL + "/logout",{},{withCredentials:true})
        dispatch(removeUser())
        // return navigate("/Login")
        }catch(err){

        }
    }

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
    <nav className="w-full from-pink-500 via-red-500 to-orange-400 px-8 py-4 flex items-center justify-between">
      
      {/* LEFT: LOGO */}
      <div className="text-3xl font-bold cursor-pointer">
        <span className="text-[#f6339a]">&lt;Dev</span><span className="text-[#fb2c36]">Tinder</span>
        <span className="text-[#fb2c36]">&gt;</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p className="text-orange-400 text-sm select-none">Welcome, User</p>

          <img
            src="/profile.jpg"  // put image in public/profile.jpg
            alt="profile"
            className="w-10 h-10 rounded-full border border-pink-600 object-cover"
          />
        </div>

        {/* DROPDOWN MENU */}
        {open && (
          <div className="absolute right-0 mt-3 bg-[#11131E] border border-gray-700 rounded-xl shadow-xl w-44 py-2 animate-fadeIn">

            <button className="w-full text-left px-4 py-2 hover:bg-gray-800 transition text-gray-200">
              Profile
            </button>

            <button className="w-full text-left px-4 py-2 hover:bg-gray-800 transition text-gray-200">
              Settings
            </button>

            <hr className="border-gray-700 my-1" />

            <button className="w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition text-red-400">
             <a onClick={handleLogout}> Logout</a>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;