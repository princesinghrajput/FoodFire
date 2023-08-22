// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

//JSX Elements
const heading = (
  <h3 id="title" key="h3">
    This is JSX heading
  </h3>
);

//functional components
const Heading =()=>{
  return (
    <h3 id="title" key="h3">
      This is Heading Components under Test Components
    </h3>
  );
} 

//Functional compoenets is a normal function
//Name of compoennets starts with capital letters
const HeaderComponent = () => {
  return <h1>Namaste Javascript from Header components</h1>;
};

const TestComponent = ()=>{
  return (
    <div>
      <h1>This is a Test COmpoenents</h1>
      {heading} 
      <Heading/>

    </div>
  )
}
// const TestComponent = () => {
//   return (
//     <div>
//       {heading}
//       <h1>This is a first heading</h1>
//       <h1>This is a second heading</h1>
//     </div>
//   );
// };

//We can skip return in arrow function also
// const TestComponentSecond = () => (
//   <div>
//     <h1>This is a first heading</h1>
//     <h1>This is a second heading</h1>
//   </div>
// );

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<TestComponent/>);
