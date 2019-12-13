import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

const SmurfList = () => {
  const smurfs = useSelector(state => state.smurfs);
  const isFetching = useSelector(state => state.isFetching);

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
          </div>
        ))}
    </>
  );
};

export default SmurfList;
