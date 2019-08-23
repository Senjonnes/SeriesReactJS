import React from "react";

const Joke = (props) => {
  return (
    <div>
      <p
        style={{
          display: props.joke.question ? "block" : "none",
          color: props.joke.question ? "blue" : "red"
        }}
      >
        Question: {props.joke.question}
      </p>
      <p
        style={{
          display: props.joke.punchline ? "block" : "none",
          color: props.joke.question ? "brown" : "pink"
        }}
      >
        Punchline: {props.joke.punchline}
      </p>
    </div>
  );
};

export default Joke;
