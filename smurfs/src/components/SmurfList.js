import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteSmurf } from "../actions/smurfActions";
import { getSmurfs } from "../actions/smurfActions";

const SmurfList = () => {
  const smurfs = useSelector(state => state.smurfs);
  const isFetching = useSelector(state => state.isFetching);

  const dispatch = useDispatch();

  const deletetion = id => {
    deleteSmurf(id);

    setTimeout(() => dispatch(getSmurfs()), 1000);
  };

  return (
    <>
      {!smurfs && !isFetching && <p>Fetch some smurfs</p>}
      {isFetching && <p>Loading...</p>}
      {smurfs &&
        smurfs.map(smurf => (
          <div key={smurf.id}>
            <p>{smurf.name}</p>
            <p>{smurf.height}</p>
            <p>{smurf.age}</p>
            <button onClick={() => deletetion(smurf.id)}>Delete Me</button>
          </div>
        ))}
    </>
  );
};

export default SmurfList;
