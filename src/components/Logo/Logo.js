import React from "react";
import fysikenLogo from "./logo_fysiken.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={fysikenLogo} alt="Fysiken logo" />
    </div>
  );
};

export default Logo;
