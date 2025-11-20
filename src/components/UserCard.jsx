// import React from "react";

// const UserCard = ({user}) => {
//     // const{firstName,laastName,age,gender,about,photoUrl}=user
//   return (
//     <div className="min-h-screen bg-[#0B0D17] flex items-center justify-center">
//       <div className="w-[340px] p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 shadow-lg">
        
//         {/* Card Content */}
//         <div className="bg-[#11131E] rounded-2xl p-6 flex flex-col items-center">
          
//           <img
//             src="https://i.pravatar.cc/150"
//             className="w-28 h-28 rounded-full border-4 border-pink-400 object-cover"
//             alt="user"
//           />

//           <h2 className="text-white text-2xl font-semibold mt-4">Jennifer</h2>
//           <p className="text-gray-400 text-sm">UI/UX Designer • India</p>

//           <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-400 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition">
//             View Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import React, { useState } from "react";
import { motion } from "framer-motion";

const UserCard = () => {
  const [swiped, setSwiped] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0D17] flex items-center justify-center px-4">
      {!swiped && (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 150 || info.offset.x < -150) {
              setSwiped(true);
            }
          }}
          whileDrag={{ rotate: info => info.point.x / 20 }}
          className="w-[330px] h-[430px] rounded-3xl p-[3px] bg-gradient-to-br from-pink-500 to-orange-400 shadow-2xl"
        >
          {/* Inner Card */}
          <div className="bg-[#11131E] w-full h-full rounded-3xl p-5 flex flex-col items-center gap-3">
            
            {/* Profile Image */}
            <img
              src="/profile.jpg"
              className="w-32 h-32 rounded-2xl object-cover border-4 border-pink-400"
              alt="user"
            />

            {/* User Info */}
            <h2 className="text-2xl font-bold text-white">Aarohi, 23</h2>
            <p className="text-gray-400 text-center">
              UI Designer • Loves Creativity 🎨  
            </p>

            {/* Buttons Area */}
            <div className="flex gap-6 mt-6">
              <button className="w-14 h-14 flex items-center justify-center bg-black/40 rounded-full text-red-400 text-2xl hover:bg-black/60 transition">
                ❌
              </button>

              <button className="w-14 h-14 flex items-center justify-center bg-black/40 rounded-full text-green-400 text-2xl hover:bg-black/60 transition">
                ❤️
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserCard;
