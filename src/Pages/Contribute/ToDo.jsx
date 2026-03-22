import React from "react";
import { NavLink } from "react-router";
import { IoMdDownload } from "react-icons/io";
import { FaStar, FaThumbsUp } from "react-icons/fa";
const ToDo = ({ singData }) => {
  const { image, title, ratingAvg, downloads, reviews, size } = singData;
  return (
    <div className="flex flex-col items-center md:flex-row gap-8">
      <figure>
        <img className="rounded w-56 h-56" src={image} alt="toDoImg" />
      </figure>
      <section className="flex-1">
        <div className="pb-4">
          <h2 className="text-[#001931] font-bold text-2xl">{title}</h2>
          <p className="text-[#627382]">
            Developed by{" "}
            <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold">
              productive.io
            </span>
          </p>
        </div>
        <div className="outline outline-[#00193115]"></div>
        <div className="py-4 flex items-center gap-8">
          <p className="flex flex-col gap-2 items-center text-[#00D390]">
            <IoMdDownload className="text-3xl" />{" "}
            <span className="text-[#627382] text-xs">Downloads</span>{" "}
            <span className="text-[#001931] text-2xl">{downloads}</span>
          </p>
          <p className="flex flex-col gap-2 items-center text-[#FF8811]">
            <FaStar className="text-3xl" />{" "}
            <span className="text-[#627382] text-xs">Average Ratings</span>{" "}
            <span className="text-[#001931] text-2xl">{ratingAvg}</span>
          </p>
          <p className="flex flex-col gap-2 items-center text-[#9F62F2]">
            <FaThumbsUp className="text-3xl" />{" "}
            <span className="text-[#627382] text-xs">Total Reviews</span>{" "}
            <span className="text-[#001931] text-2xl">{reviews}</span>
          </p>
        </div>

        <NavLink
          to=""
          className="text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold"
        >
          Install Now ({size} MB)
        </NavLink>
      </section>
    </div>
  );
};

export default ToDo;
