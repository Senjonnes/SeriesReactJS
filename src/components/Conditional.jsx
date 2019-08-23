import React from "react";

const Conditional = (props) => {
  return (
    <div>
      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Something cool is about to happen</h1>
      )}
    </div>
  );
};

export default Conditional;
