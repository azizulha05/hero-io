import React from "react";
import ToDo from "./ToDo";
import Ratings from "./Ratings";
import Description from "./Description";

const Contribute = () => {
  return (
    <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-2 my-5">
      <section className="pb-4">
        <ToDo />
      </section>
      <div className="outline outline-[#00193115]"></div>
      <section className="py-4">
        <Ratings />
      </section>
      <div className="outline outline-[#00193115]"></div>
      <section className="py-4">
        <Description />
      </section>
    </div>
  );
};

export default Contribute;
