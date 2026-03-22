import React from "react";
import ToDo from "./ToDo";
import Ratings from "./Ratings";
import Description from "./Description";
import { useLoaderData, useParams } from "react-router";

const Contribute = () => {
  const { id } = useParams();
  const ioId = parseInt(id);
  const data = useLoaderData();
  const singData = data.find((sin) => sin.id === ioId);
  console.log(singData);
  return (
    <div className="w-11/12 mx-auto px-2 md:px-3 lg:px-2 my-5">
      <section className="pb-4">
        <ToDo singData={singData} />
      </section>
      <div className="outline outline-[#00193115]"></div>
      <section className="py-4">
        <Ratings singData={singData} />
      </section>
      <div className="outline outline-[#00193115]"></div>
      <section className="py-4">
        <Description singData={singData} />
      </section>
    </div>
  );
};

export default Contribute;
