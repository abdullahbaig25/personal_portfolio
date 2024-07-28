import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="text-center my-8 mb-10">
      <h2 className="text-4xl text-gray-800 font-semibold mb-4">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
