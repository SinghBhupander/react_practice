import React from "react";
import ReactDOM from "react-dom";
import Component2 from "../Component2";
import Jsx from "../Jsx";
import App from "./App";
import Arrow from "./Arrow";
import Hello from "./Hello";
import info from "./info";
import Listrender from "./Listrender";
import Props from "./Props";
import States from "./States";

function createHello(info) {
  return (
    <div>
      <Hello name={info.name} number={info.number} />
    </div>
  );
}
function F1() {
  return (
    <div>
      <App />
      <Component2 />
      <Jsx />
      <Props name="rohan" age="34" />
      <Props name="rahul" age="30" />
      {info.map(createHello)}
      <Arrow />
      <Listrender />
      <States />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<F1 />);
