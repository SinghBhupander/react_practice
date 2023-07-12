import React, { useState } from "react";
function Form1() {
  const [data, setData] = useState({
    name: "",
    email: ""
  });
  const changeHandle = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <hr />
        <label>Enter name</label>
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={data.name}
          onChange={changeHandle}
        />
        <br />
        <label>Enter email</label>
        <input
          type="email"
          name="email"
          placeholder="your id"
          value={data.email}
          onChange={changeHandle}
        />
        <br />
        <button> Submit</button>
        <hr />
      </form>
    </div>
  );
}
export default Form1;
