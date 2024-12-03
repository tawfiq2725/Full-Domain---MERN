import React from "react";

const ChildtoP = ({ prop }) => {
  const name = "tawfiq";
  prop(name);
  return (
    <>
      <h2>child </h2>
    </>
  );
};

export default ChildtoP;
