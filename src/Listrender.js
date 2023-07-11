import React from "react";

function Listrender() {
  const name = ["rohan", "bhuppi", "exynos"];
  const number = [1, 3, 5, 7];
  return (
    <div>
      {number.map((nam) => (
        <h1> {nam * 2}</h1>
      ))}
      {name.map((nam) => (
        <h1> {nam}</h1>
      ))}
    </div>
  );
}
export default Listrender;
