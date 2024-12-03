import React, { useState } from "react";
import ChildtoP from "./ChildtoP";

const PtoChild = () => {
  const [intial, setInitial] = useState("hi");
  return (
    <>
      <h1>{intial}</h1>
      <ChildtoP prop={setInitial} />
    </>
  );
};

export default PtoChild;
