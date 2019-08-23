import React from "react";
import Nav from "./Nav";
import SmallNote from "./SmallNote";

const NavBar = () => {
  return (
    <div>
      <Nav />
      <div style={{ backgroundColor: "#999999" }}>
        <SmallNote />
      </div>
    </div>
  );
};

export default NavBar;
