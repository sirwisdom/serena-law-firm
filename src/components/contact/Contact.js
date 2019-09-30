import React from "react";
import ContactForm from "./form/ContactForm";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact-div">
          <div className="address-section">
            <div className="address-div">
              <i className="fas fa-map-signs"></i>{" "}
              <h5>No 10, Hiltop street, Portharcourt Rivers State, Nigeria</h5>
            </div>

            <div className="address-div">
              <i className="fa fa-phone"></i>
              <h5>(+234) 123 0456 789</h5>
            </div>

            <div className="address-div">
              <i className="fas fa-envelope"></i> <h5>example@example.com</h5>
            </div>
          </div>
          <div className="form-section">
            <ContactForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;
