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
            <Link to="/">
              <li className="nav-item active">
                <span className="nav-link">
                  Home <span className="sr-only">(current)</span>{" "}
                </span>
              </li>
            </Link>
            <Link to="/about">
              <li className="nav-item">
                <span className="nav-link">About</span>
              </li>
            </Link>
            <Link to="/article">
              <li className="nav-item">
                <span className="nav-link">Articles</span>
              </li>
            </Link>
            <Link to="contact">
              <li className="nav-item">
                <span className="nav-link">Contact</span>{" "}
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
