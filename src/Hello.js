import React from "react";

function Hello(Props) {
  return (
    <div>
      <h1> Hello {Props.name}</h1>
      <p> Contact {Props.number}</p>
    </div>
  );
}
export default Hello;
