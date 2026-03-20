import React from "react";
import cardImg from "../../assets/demo-app (2).webp";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { NavLink } from "react-router";

const InstallationCards = () => {
  return (
    <div className="flex justify-between items-center bg-white py-2 px-4 rounded">
      <div className="flex gap-3">
        <img className="w-12 h-12 object-cover rounded" src={cardImg} alt="cardImg" />
        <div>
          <h2>Forest: Focus for Productivity</h2>
          <div className="flex gap-3 items-center">
            <p className="flex gap-0.5 items-center text-[#00D390]">
              <IoMdDownload /> <span>9M</span>
            </p>
            <p className="flex gap-0.5 items-center text-[#FF8811]">
              <FaStar /> <span>5</span>
            </p>
            <p className="text-[#627382]">524 MB</p>
          </div>
        </div>
      </div>
      <div className="">
        <NavLink className="bg-[linear-gradient(125deg,#00D390_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white">
          Uninstall
        </NavLink>
      </div>
    </div>
  );
};

export default InstallationCards;
