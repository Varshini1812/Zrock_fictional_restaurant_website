import React, { useState } from "react";
import "../assets/css/style.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <span>Thy_Fiesta</span>
        </a>
        <nav className={click ? "navbar active" : "navbar"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#booking">Book a table</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hamburger" onClick={handleClick}>
          <i
            className={click ? "fas fa-times" : "fas fa-bars"}
            style={{ color: "white", fontSize: "24px" }}
          ></i>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
