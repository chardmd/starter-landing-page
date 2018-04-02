/**
 *
 * Navbar
 *
 */

import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Company Name
          </a>
          <button className="btn btn-primary">Sign In</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
