import React, { Component } from "react";

class States extends Component {
  constructor() {
    super();
    this.state = { name: "rohan" };
  }
  changeName() {
    this.setState({ name: "Aryan" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}> Click</button>
      </div>
    );
  }
}
export default States;
