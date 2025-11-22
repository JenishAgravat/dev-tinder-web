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

const UserCard = ({ feed }) => {
  console.log(feed)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (info) => {
    if (info.offset.x > 150 || info.offset.x < -150) {
      setCurrentIndex((prev) => prev + 1); // Move to next card
    }
  };

  // If no more users
  if (currentIndex >= feed.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        No more profiles 🚀
      </div>
    );
  }

  const user = feed[currentIndex]; // Show only one user

  return (
    <div className="min-h-screen bg-[#0B0D17] flex items-center justify-center px-4">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, info) => handleSwipe(info)}
        whileDrag={{ rotate: (info) => info.point.x / 20 }}
        className="w-[330px] h-[430px] rounded-3xl p-[3px] bg-gradient-to-br from-pink-500 to-orange-400 shadow-2xl"
      >
        {/* Inner Card */}
        <div className="bg-[#11131E] w-full h-full rounded-3xl p-5 flex flex-col items-center gap-3">
          {/* Profile Image */}
          <img
            src={user.photoUrl}
            className="w-32 h-32 rounded-2xl object-cover border-4 border-pink-400"
            alt="user"
          />

          {/* User Info */}
          <h2 className="text-2xl font-bold text-white">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-400 text-center">{user.skills}</p>

          {/* Buttons Area */}
          <div className="flex gap-6 mt-6">
            {/* Reject */}
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="w-14 h-14 flex items-center justify-center bg-black/40 rounded-full text-red-400 text-2xl"
            >
              ❌
            </button>

            {/* Accept */}
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="w-14 h-14 flex items-center justify-center bg-black/40 rounded-full text-green-400 text-2xl"
            >
              ❤️
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserCard;
