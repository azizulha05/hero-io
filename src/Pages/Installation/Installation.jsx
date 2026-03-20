import React from "react";
import InstallationCards from "./InstallationCards";
const Installation = () => {
  return (
    <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 my-5 pb-4 space-y-4">
      <div className="text-center">
        <h2 className="text-[#001931] font-bold text-xl lg:text-3xl">Your Installed Apps</h2>
        <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between items-center">
        <p>1 Apps Found</p>
        <select defaultValue="Sort By Size" className="px-3 py-1 border rounded text-[#627382]">
          <option disabled={true}>Sort By Size</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        <InstallationCards />
        <InstallationCards />
      </div>
    </div>
  );
};

export default Installation;
