import React from "react";
import Banner from "../../components/Headers/Banner";
import HomesCard from "./HomesCard";
import { Link, useLoaderData } from "react-router";

const Homes = () => {
  const appsData = useLoaderData();
  return (
    <div className="">
      <section>
        <Banner />
      </section>
      <section className="w-11/12 mx-auto px-2 md:px-3 lg:px-4 my-5">
        <div className="py-6">
          <div className="space-y-2 mb-4">
            <h2 className="text-[#001931] text-3xl font-bold text-center">Trending Apps</h2>
            <p className="text-[#627382] text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="space-y-3">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              {appsData.slice(0, 8).map((data) => (
                <HomesCard key={data.id} data={data} />
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Link
                to="/apps"
                className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
              >
                Show All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;
