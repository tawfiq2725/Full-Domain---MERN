import React from "react";
import Parent from "./props/parent";
import PtoChild from "./props/PtoChild";
import Counter from "./counter/counter";
import Context from "./context/Context";
import ParentComponent from "./useCallback/parent";
import { UseCounter } from "../custom/UseCounter";

const App = () => {
  const { count, increment, decrement } = UseCounter(0);
  return (
    <>
      <h1>App</h1>
      {/* <Parent /> */}
      {/* <PtoChild /> */}
      {/* <Counter /> */}
      {/* <Context /> */}
      {/* <ParentComponent /> */}
      <div>
        <p>display : {count}</p>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
      </div>
    </>
  );
};

export default App;
