// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// const App = () => {
//   const location = useLocation();
//   const parram = new URLSearchParams(location.search);
//   const getname = parram.get("name");
//   const getage = parram.get("age");
//   return (
//     <>
//       <h1>Query params</h1>
//       <h1>{getname}</h1>
//       <h1>{getage}</h1>
//     </>
//   );
// };
// const Root = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//       </Routes>
//     </Router>
//   );
// };
// export default Root;
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
//   useParams,
// } from "react-router-dom";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const goToUserPage = (id) => {
//     navigate(`/user/${id}`); // Navigating to a user page with the id path parameter
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={() => goToUserPage(1)}>Go to User 1</button>
//       <button onClick={() => goToUserPage(2)}>Go to User 2</button>
//     </div>
//   );
// };

// const UserPage = () => {
//   const { id } = useParams(); // Accessing the path parameter `id`

//   return (
//     <div>
//       <h1>User Page</h1>
//       <p>Viewing user with ID: {id}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/user/:id" element={<UserPage />} /> {/* Dynamic route */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// const withExtraProps = (WrappedComponent) => {
//   return (props) => {
//     // Adding extra prop before passing it down
//     const newProps = { ...props, extraProp: "I am an extra prop!" };

//     return <WrappedComponent {...newProps} />;
//   };
// };

// const MyComponent = ({ name, extraProp }) => {
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>{extraProp}</p>
//     </div>
//   );
// };

// const HocComponent = withExtraProps(MyComponent);

// const App = () => {
//   return (
//     <>
//       <h1>parent</h1>
//       <HocComponent name="Tawfiq" />
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const Child = ({ name }) => {
//   console.log("render");

//   return (
//     <>
//       <h1>Child</h1>
//       <h1>Hello {name}</h1>
//     </>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>App</h1>
//       <h3>{count}</h3>
//       <Child name={"Tawfiq"} />
//       <button onClick={() => setCount(count + 1)}>increase</button>
//     </>
//   );
// };
// export default App;
