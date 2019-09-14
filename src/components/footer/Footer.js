import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./FooterStyle.css";
import { Link } from "react-router-dom";

const footerStyle = {
  backgroundColor: ""
};
export default function Footer() {
  return (
    <div>
      <footer className="page-footer font-small  pt-4">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <Link to="#">
                <i className="fab fa-facebook-f"> </i>
              </Link>
            </li>
            <li class="list-inline-item">
              <Link to="#">
                <i className="fab fa-twitter"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <i className="fab fa-google-plus-g"> </i>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <i className="fab fa-linkedin-in"> </i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center py-3 inline-block">
          <p>
            {" "}
            © 2018 Copyright: &nbsp;
            <Link to="#">
              {" "}
              <span className="link"> wlawchambers.com </span>
            </Link>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}
