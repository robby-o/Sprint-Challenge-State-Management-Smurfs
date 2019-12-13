import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { submitSmurf } from "../actions/smurfActions";
import { getSmurfs } from "../actions/smurfActions";

const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const dispatch = useDispatch();

  const handleChanges = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitSmurf(smurf);
    setSmurf({ name: "", age: "", height: "" });

    setTimeout(() => dispatch(getSmurfs()), 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        placeholder="name..."
        name="name"
        value={smurf.name}
        onChange={handleChanges}
      />
      <input
        id="age"
        type="text"
        placeholder="age..."
        name="age"
        value={smurf.age}
        onChange={handleChanges}
      />
      <input
        id="height"
        type="text"
        placeholder="height..."
        name="height"
        value={smurf.height}
        onChange={handleChanges}
      />
      <input type="submit" value="submit smurf" />
    </form>
  );
};

export default SmurfForm;
