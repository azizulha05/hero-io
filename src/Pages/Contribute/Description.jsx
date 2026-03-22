import React from "react";

const Description = ({ singData }) => {
  return (
    <div>
      <h2 className="text-[#001931] text-2xl font-bold mb-5">Description</h2>
      <p className="text-[#627382] text-justify">{singData.description}</p>
    </div>
  );
};

export default Description;
