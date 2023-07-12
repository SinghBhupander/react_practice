import React, { useState } from "react";
function Form() {
  const [name, setName] = useState("bhuppi");
  const HandleForm = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div>
      <form onSubmit={HandleForm}>
        <hr />

        <label>Enter your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button>Submit</button>
        <hr />
      </form>
    </div>
  );
}
export default Form;
