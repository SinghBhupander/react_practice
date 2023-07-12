import React, { useState, useEffect } from "react";
function Hook() {
  const [name, setName] = useState("samir");
  let changeState = () => {
    setName("falak");
  };
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("rendered");
  });

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeState}>Update</button>

      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
export default Hook;
