import React from "react";

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay =
      hours < 12
        ? "Morning"
        : hours >= 12 && hours < 17
        ? "Afternoon"
        : "Night";
    return (
      <div>
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
      </div>
    );
  }
}

export default Greeting;
