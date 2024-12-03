import React from "react";
import Child from "./child";

const Parent = () => {
  const obj = {
    name: "tawfiq",
    age: 21,
  };
  return (
    <>
      <h1>Parent</h1>
      <Child {...obj} />
    </>
  );
};

export default Parent;
