import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";

const Login=()=>{
    const[emaiId,setEmailId]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogin=async(e)=>{
      e.preventDefault()
        try{
            const res=await axios.post(BASE_URL+"/login",{emaiId,password},{withCredentials:true})
            dispatch(addUser(res.data));
            navigate("/");
        }catch(err){
            console.error(err)
        }
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-500 via-red-500 to-orange-400 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-md p-8 text-center text-white">
        <h1 className="text-4xl font-bold mb-2 tracking-wide"><span className="text-[#e2e1e1]">&lt;Dev</span><span className="text-[#1f1e1e]">Tinder</span>
        <span className="text-[#f4edee]">&gt;</span></h1>
        <p className="text-pink-100 mb-8">Connect with awesome developers 💻❤️</p>

        <form className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={emaiId}
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 focus:ring-pink-300"
              onChange={(e)=>setEmailId(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 focus:ring-pink-300"
              onChange={(e)=>setPassword(e.target.value)}
           />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-pink-600 font-semibold py-3 rounded-xl hover:bg-pink-100 transition-all duration-200"
            onClick={handleLogin} >
            Login
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-2 text-sm">
          <Link className="text-white/80 hover:text-white">
            Forgot Password?
          </Link>
          <Link to={"/Signup"} className="text-white/80 hover:text-white">
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
