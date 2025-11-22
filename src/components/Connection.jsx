import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";

const Connection = () => {
  const fetchConnections= async ()=>{
    try{
      const res=await axios.get(BASE_URL + "/user/connections",{withCredentials:true});
      console.log(res.data.data)
    }catch(err){

    }
  }
  useEffect(()=>{fetchConnections()},[])

  return (
    <div className="min-h-screen bg-[#0B0D17] px-6 py-10">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Connection Requests
      </h1>

      <div className="max-w-xl mx-auto space-y-6">
        {requests.map((user) => (
          <div
            key={user.id}
            className="bg-[#11131E] border border-gray-800 rounded-2xl p-5 flex gap-4 items-center shadow-lg"
          >
            {/* Profile Image */}
            <img
              src={user.photoUrl}
              alt="user"
              className="w-16 h-16 rounded-full object-cover border-2 border-pink-500"
            />

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-400">{user.skills}</p>
              <p className="text-xs text-gray-500 mt-1">{user.about}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button className="w-24 py-1 bg-green-500/20 text-green-400 border border-green-500/40 rounded-lg hover:bg-green-500/30 transition">
                Accept
              </button>

              <button className="w-24 py-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded-lg hover:bg-red-500/30 transition">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connection;
