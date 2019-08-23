import React from "react";

const Nav = () => {
  const styles = {
    backgroundColor: "#dedede",
    listStyle: "none",
    textTransform: "uppercase"
  };
  return (
    <ul style={styles}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">FAQ</a>
      </li>
      <li>
        <a href="#">Logout</a>
      </li>
    </ul>
  );
};

export default Nav;
