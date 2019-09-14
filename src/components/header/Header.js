import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import Team1 from "../images/team1.jpeg";
import Team4 from "../images/team4.jpeg";
import Team5 from "../images/team5.jpeg";

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
              <h2 style={htag}> Welcome</h2>
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
              <h2 style={htag}> Need Legal Assistance ?</h2>
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
      <div className="container quote-div">
        <div className="row">
          <div className="col-10 mx-auto col-md-4">
            <h1>"</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis
            </p>
            <h5>Anderson Jane</h5>
          </div>
          <div className="col-10 mx-auto col-md-4">
            <h1>"</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis
            </p>
            <h5>Adam Joe</h5>
          </div>
          <div className="col-10 mx-auto col-md-4">
            <h1>"</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro veniam pariatur impedit facilis ex cupiditate ut ea enim
              blanditiis
            </p>
            <h5>Brian Joe</h5>
          </div>
        </div>
      </div>
      <br />

      <div className="container team-div">
        <h2 style={htag} className="text-center mb-3">
          Meet our Team Members
        </h2>
        <div className="row">
          <div className="col-10 mx-auto col-md-4">
            <div className="card">
              <img src={Team1} className="card-img-top" alt="team member" />
              <div>
                <h5 className="text-center htag">Dr. John Doe</h5>
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto col-md-4">
            <div className="card">
              <img src={Team4} className="card-img-top" alt="team member" />
              <div>
                <h5 className="text-center htag">Dr. Jane Doe</h5>
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto col-md-4">
            <div className="card">
              <img src={Team5} className="card-img-top" alt="team member" />
              <div>
                <h5 className="text-center htag">Dr. Angela Doe</h5>
              </div>
            </div>
          </div>
        </div>
        <Link to="/attorneys">
          <button className="btn btn-lg text-center ml-4" role="btn">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}
