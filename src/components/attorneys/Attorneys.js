import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./AttorneyStyle.css";
import Team1 from "../images/team1.jpeg";
import Team2 from "../images/team2.jpeg";
import Team4 from "../images/team4.jpeg";
import Team5 from "../images/team5.jpeg";
import Team3 from "../images/team3.jpg";
import Article1 from "../images/article2.jpeg";

export default function Attorneys() {
  return (
    <div>
      <section className="container pt-3 mt-2">
        <h4 className="text-center">Meet Our Team</h4>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          porro veniam pariatur impedit facilis ex cupiditate. Dolorum porro
          veniam pariatur impedit facilis ex cupiditate
        </p>
      </section>

      <section className="container attorneys-div">
        <div className="members-div">
          <img src={Team1} alt="team-member" />
          <h6>Barr. John Doe</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            porro veniam pariatur impedit facilis ex cupiditate
          </p>
        </div>
        <div className="members-div">
          <img src={Team2} alt="team-member" />
          <h6>Barr. John Lyon</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            porro veniam pariatur impedit facilis ex cupiditate
          </p>
        </div>
        <div className="members-div">
          <img src={Team5} alt="team-member" />
          <h6>Barr. Peace kyle</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            porro veniam pariatur impedit facilis ex cupiditate
          </p>
        </div>
        <div className="members-div">
          <img src={Team3} alt="team-member" />
          <h6>Barr. John Michael</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            porro veniam pariatur impedit facilis ex cupiditate
          </p>
        </div>
        <div className="members-div">
          <img src={Team4} alt="team-member" />
          <h6>Barr. Janet Jackson</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            porro veniam pariatur impedit facilis ex cupiditate
          </p>
        </div>
        <div className="members-div">
          <img src={Article1} alt="team-member" />
          <h6>Barr. Kenneth Doe</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            porro veniam pariatur impedit facilis ex cupiditate
          </p>
        </div>
      </section>
    </div>
  );
}
