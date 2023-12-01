// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container-fluid headnav">
    <nav className="navbar navbar-expand-lg container-fluid navigation px-3">
        <Link className="navbar-brand" to="/">
            <span className="initialFL">N<span>S.</span></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end mr-3" id="navbarNavDropdown">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Skills">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Portfolio">Work</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>

            </ul>
        </div>
    </nav>
</div>
  );
};

export default Navbar;
