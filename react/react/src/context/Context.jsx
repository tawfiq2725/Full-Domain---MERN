import React, { createContext } from "react";
import Context2 from "./Context2";
import Mycontext from "./main1";
Mycontext;

const Context = () => {
  const name = "Tawfiq";

  return (
    <>
      <h1>Context Api</h1>
      <Mycontext.Provider value={name}>
        <Context2 />
      </Mycontext.Provider>
    </>
  );
};

export default Context;
