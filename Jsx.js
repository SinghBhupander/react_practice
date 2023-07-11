import React, { Component } from "react";
const name = "bhuppi";
const a = 11;
var msg = "";
if (a < 10) {
  msg = "hello";
} else {
  msg = "bye";
}

class Jsx extends Component {
  render() {
    return (
      <div>
        <h1>{name}</h1>
        <h1>{msg}</h1>
      </div>
    );
  }
}
export default Jsx;
