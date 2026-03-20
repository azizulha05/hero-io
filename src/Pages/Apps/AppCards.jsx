import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import cardImg from "../../assets/demo-app (2).webp";

const AppCards = () => {
  return (
    <div className="bg-white p-3 rounded space-y-2">
      <figure>
        <img className="w-full h-72 object-cover rounded" src={cardImg} alt="card img" />
      </figure>
      <div>
        <h2 className="text-[#001931] font-semibold">Forest: Focus for Productivity</h2>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex gap-0.5 items-center text-[#00D390]">
          <IoMdDownload /> <span>9M</span>
        </p>
        <p className="flex gap-0.5 items-center text-[#FF8811]">
          <FaStar /> <span>5</span>
        </p>
      </div>
    </div>
  );
};

export default AppCards;
