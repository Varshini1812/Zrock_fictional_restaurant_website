import React from "react";

const Footer = () => {
  return (
     <section className="footer">
        <div className="share">
          <a href="/" className="fab fa-facebook-f" aria-label="Facebook"></a>
          <a href="/" className="fab fa-twitter" aria-label="Twitter"></a>
          <a href="/" className="fab fa-instagram" aria-label="Instagram"></a>
          <a href="/" className="fab fa-pinterest" aria-label="Pinterest"></a>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#booking">Book a Table</a>
          <a href="#contact">Contact</a>
        </div>
      </section>
    
  );
};

export default Footer;
