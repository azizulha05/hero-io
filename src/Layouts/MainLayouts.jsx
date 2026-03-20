import React from "react";
import Headers from "../components/Headers/Headers";
import { Outlet } from "react-router";
import Footers from "../components/Footers/Footers";

const MainLayouts = () => {
  return (
    <div className="bg-[#62738218] my-0">
      <section>
        <Headers />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footers />
      </section>
    </div>
  );
};

export default MainLayouts;
