import React from "react";
import Child1 from "./child1";

const Child = ({ name, age }) => {
  return (
    <>
      <h1>Child + {name}</h1>
      <h1>Child + {age}</h1>
      <Child1 name={name} />
    </>
  );
};

export default Child;
