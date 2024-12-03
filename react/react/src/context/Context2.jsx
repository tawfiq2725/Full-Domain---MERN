import React, { useContext } from "react";
import Mycontext from "./main1";
const Context2 = () => {
  const valueName = useContext(Mycontext);
  return <div>{valueName}</div>;
};

export default Context2;
