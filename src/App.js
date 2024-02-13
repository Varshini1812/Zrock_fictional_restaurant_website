import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

import Booking from "./components/Booking";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      
      <Booking />
      <Contact />
      
      <Footer />
    </>
  );
};

export default App;
