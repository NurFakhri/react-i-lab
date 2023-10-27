import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "600",
    margin: "0 25px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 5px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
  };

  const signInStyle = {
    ...buttonStyle,
    backgroundColor: "blue",
    color: "white",
  };

  return (
    <nav style={navStyle}>
      <img src="logo-ilab.png" alt="Logo" style={{ width: "50px" }} />

      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>

      <div>
        <button style={buttonStyle}>Sign Up</button>
        <button style={signInStyle}>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
