import React from "react";
import header from "../img/header.jpg";

const Header2 = () => {
  return (
    <header>
      <img src={header} className="headerImg" alt="Header" />
      <h1 style={{ textAlign: "center", color: "orange" }}>Meme Generator</h1>
    </header>
  );
};

export default Header2;
