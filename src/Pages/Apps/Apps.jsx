import React from "react";
import { CiSearch } from "react-icons/ci";
import AppCards from "./AppCards";

const Apps = () => {
  return (
    <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 my-5 pb-4 space-y-4">
      <div className="text-center">
        <h2 className="text-[#001931] font-bold text-xl lg:text-3xl">Our All Applications</h2>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p>(132) Apps Found</p>
        <label className="input text-[#627382]">
          <CiSearch />
          <input type="search" required placeholder="search Apps" />
        </label>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <AppCards />
        <AppCards />
        <AppCards />
        <AppCards />
      </div>
    </div>
  );
};

export default Apps;
