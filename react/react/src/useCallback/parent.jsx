import React, { useMemo, useState } from "react";

const ParentComponent = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);
  const double = useMemo(() => {
    return slow(num);
  }, [num]);
  function slow(num) {
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2;
  }
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <div>
        <div style={theme}>{double}</div>
        <button onClick={() => setDark((pre) => !pre)}></button>
      </div>
      <h1>use memo</h1>
    </>
  );
};

export default ParentComponent;
