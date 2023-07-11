import React from "react";
import ReactDOM from "react-dom";
import Component2 from "../Component2";
import Jsx from "../Jsx";
import App from "./App";
function F1() {
  return (
    <div>
      <App />
      <Component2 />
      <Jsx />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<F1 />);
