import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavStyle.css";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">
                <span className="nav-link">
                  Home <span className="sr-only">(current)</span>{" "}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <span className="nav-link">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="practice-areas">
                <span className="nav-link">Practice Areas</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="articles">
                <span className="nav-link">Articles</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact">
                <span className="nav-link">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
