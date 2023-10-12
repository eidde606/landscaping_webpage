import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-menu text-center">
      <nav id="mobile-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service-one">Services</Link>
          </li>
          <li>
            <Link to="#">Page</Link>
            <ul className="submenu">
              <li>
                <Link to="/project-one">Project 1</Link>
              </li>
              <li>
                <Link to="/project-two">Project 2</Link>
              </li>
              <li>
                <Link to="/project-details">Project Details</Link>
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/error">404</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
