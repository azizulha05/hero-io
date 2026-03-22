import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router";

const AppCards = ({ data }) => {
  const { image, title, ratingAvg, downloads, id } = data;
  return (
    <Link to={`contribute/${id}`}>
      <div className="bg-white p-3 rounded space-y-2">
        <figure>
          <img className="w-full h-72 object-cover rounded" src={image} alt="card img" />
        </figure>
        <div>
          <h2 className="text-[#001931] font-semibold">{title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex gap-0.5 items-center text-[#00D390]">
            <IoMdDownload /> <span>{downloads}</span>
          </p>
          <p className="flex gap-0.5 items-center text-[#FF8811]">
            <FaStar /> <span>{ratingAvg}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppCards;
