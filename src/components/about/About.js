import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Attorneys from "../attorneys/Attorneys";
import Vision1 from "../images/vision1.jpg";
import Vision2 from "../images/vision2.jpg";
import Vision3 from "../images/vision3.jpg";

export default function About() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <h3 className="text-center text-uppercase mb-4 pt-2">About Us </h3>
        </nav>
      </div>

      <div className="container">
        <section className="row align-items-lg-center">
          <div className="col-10 mx-auto col-md-4">
            <img src={Vision1} alt="our vision" className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-8">
            <h4 className="text-center">Our Vision</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis nam cum quae laudantium nesciunt beatae perspiciatis,
              tenetur vitae nulla!
            </p>
            <p>
              Dolorum porro veniam pariatur impedit facilis ex cupiditate ut ea
              enim blanditiis nam cum quae laudantium nesciunt beatae
              perspiciatis, tenetur vitae nulla!
            </p>
          </div>
        </section>
        <section className="row align-items-lg-center">
          <div className="col-10 mx-auto col-md-4">
            <img src={Vision2} alt="our vision" className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-8">
            <h4 className="text-center">Our Mission</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis nam cum quae laudantium nesciunt beatae perspiciatis,
              tenetur vitae nulla!
            </p>
            <p>
              Dolorum porro veniam pariatur impedit facilis ex cupiditate ut ea
              enim blanditiis nam cum quae laudantium nesciunt beatae
              perspiciatis, tenetur vitae nulla!
            </p>
          </div>
        </section>
        <section className="row align-items-lg-center">
          <div className="col-10 mx-auto col-md-4">
            <img src={Vision3} alt="our vision" className="img-fluid " />
          </div>
          <div className="col-10 mx-auto col-md-8">
            <h4 className="text-center">Our Goals</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ex cupiditate ut ea enim
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ex cupiditate ut ea enim
            </p>
          </div>
        </section>

        <Attorneys />
      </div>
    </React.Fragment>
  );
}
