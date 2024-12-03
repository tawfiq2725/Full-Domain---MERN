// import React, { useReducer } from "react";
// import Child from "./Child";
// import { useState } from "react";

// const App = () => {
//   // const [count, setCount] = useState(0);

//   function dispatch() {}

//   const [state, dispatch] = useReducer(reduce, { initial: 0 });
//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>Parent</h1>

//       <Child prop={count} />
//       <button onClick={handleClick}>Increment</button>
//     </>
//   );
// };

// export default App;

import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Compone mounting
    console.log("component mounted");
    // updating phase
    console.log("component updated");
    // unmounting phase
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return (
    <>
      <h1>Life cycle methods</h1>
    </>
  );
};

export default App;
