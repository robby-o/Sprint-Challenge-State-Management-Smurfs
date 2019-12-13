import "./App.css";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { getSmurfs } from "../actions/smurfActions";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const App = () => {
  const dispatch = useDispatch();
  const fetchSmurfs = useCallback(() => dispatch(getSmurfs()), [dispatch]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>

      <button onClick={fetchSmurfs} className="button">
        Grab smurfs
      </button>
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
