import React from "react";
import "./HeaderStyle.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Team1 from "../images/team1.jpeg";
import PractiseAreas from "../practiseareas/PractiseAreas";

const htag = {
  color: "#1f0404"
};

// <i class="fas fa-bars"></i>

export default function Header() {
  return (
    <div>
      <div className="jumbotron">
        <div id="jumbotron-text">
          <h1 className="display-4 text-capitalize">Effective solutions</h1>
          <p className="lead">
            This is a simple hero unit, component for calling extra attention to
            featured content or information.
          </p>
          <button className=" btn btn-lg " role="btn">
            Know More
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 welcome-div">
            <img src={Team1} alt="Barr. John Doe" className="img-responsive" />

            <div>
              <h3 style={htag}> Welcome</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum porro veniam pariatur impedit facilis ex cupiditate ut
                ea enim blanditiis nam cum quae laudantium nesciunt beatae
                perspiciatis, tenetur vitae nulla! ut ea enim blanditiis nam cum
                quae laudantium nesciunt beatae perspiciatis, tenetur vitae
                nulla!
              </p>
            </div>
          </div>

          <div className="col-10 mx-auto col-md-6 welcome-div">
            <div>
              <h3 style={htag}> Need Legal Assistance ?</h3>
              <h5 style={htag}>Ask Our Team</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum porro veniam pariatur impedit facilis ex cupiditate ut
                ea enim blanditiis nam cum quae laudantium nesciunt beatae
                perspiciatis, tenetur vitae nulla!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum porro veniam pariatur impedit facilis ex cupiditate ut
                ea enim blanditiis nam cum quae laudantium nesciunt beatae
                perspiciatis, tenetur vitae nulla!
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <section className="container pb-4 mt-2 mb-4">
        <h3 className="text-center section-header">Why chose us</h3>
        <div className="row">
          <div className="col-10 mx-auto col-md-4">
            <h6>Personal Service</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis nam cum quae laudantium
            </p>
          </div>
          <div className="col-10 mx-auto col-md-4">
            <h6>Competitive Prices</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis nam cum quae laudantium
            </p>
          </div>
          <div className="col-10 mx-auto col-md-4">
            <h6>Quick & Efficient</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis nam cum quae laudantium
            </p>
          </div>
        </div>
      </section>

      <PractiseAreas />
    </div>
  );
}
