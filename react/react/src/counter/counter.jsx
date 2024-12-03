import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mount");

    return () => {
      console.log("clean up , unmount");
    };
  }, [count]);
  return (
    <>
      <h2>Counter</h2>

      <h1>Counter : {count}</h1>

      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        sub
      </button>
      <button onClick={() => setCount(0)} disabled={count <= 0}>
        reset
      </button>
    </>
  );
};

export default Counter;
