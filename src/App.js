import React from "react";
let obj1 = {
  color: "blue",
  fontSize: "50px"
};
let obj2 = {
  fontFamily: "cooper",
  backgroundColor: "pink"
};
const name = "rohan";
const year = 2023;
function App() {
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>Hello world</h1>
      <ul style={obj1}>
        <li>whats'up</li>
        <li>how's life</li>
        <li>no Worries</li>
      </ul>
      <p style={{ ...obj1, ...obj2 }}> hello {name}</p>
      <p style={{ ...obj1, ...obj2 }}> this year is {year}</p>
    </div>
  );
}
export default App;
