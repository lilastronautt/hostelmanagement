import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../../assets/logo.png";
import "./NavBar.css"

const NavigBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  // paths where the navbar should be hidden
  const hiddenPaths = ['/', '/student-details', '/set-password'];

  // to check if the current location matches any of the hidden paths
  const shouldHideNavbar = hiddenPaths.includes(location.pathname);

  if (shouldHideNavbar) {
    return null; // render nothing if the navbar should be hidden
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink
            to="/student/dashboard"
            exact="true"
            className="logo-flex"
          >
            {/* <img src={logo} alt="Logo" /> */} Logo
          </NavLink>
        </div>
        <div className="navbar-menu">
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/student/dashboard"
                exact="true"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/hostel"
                exact="true"
                onClick={toggleMenu}
              >
                Hostel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/student/admission"
                exact="true"
                onClick={toggleMenu}
              >
                Admission
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/student/contact-us"
                exact="true"
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/student/help"
                exact="true"
                onClick={toggleMenu}
              >
                Help
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/student/login"
                exact="true"
                onClick={toggleMenu}
              >
                <button className="nav-btn">
                  Sign In/Sign Up
                </button>
              </NavLink>
            </li>
          </ul>
          <div className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigBar;
