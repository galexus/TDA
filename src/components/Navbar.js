import React from "react";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  return (
    <header className="header">
      <Link to="/Hero" className="logo">
        <div>
          <img
            src={require("./assets/logo.png")}
            alt="TopML - Centre of Topological Machine Learning and Innovation "
          />
        </div>
        <div to="/Hero" className="Htext">
          TopML Centre of Topological Machine Learning and Innovation
        </div>
      </Link>
 
      <nav className="navbar">
        <Link to="/Hero">Home</Link>
        <Link to="/Members">Members</Link>
        <Link to="/Publication">Publication</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Oppotunities">Oppotunities</Link>
      </nav>
    </header>
  );
};
 
export default Navbar;