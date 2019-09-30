import React from "react";
import "./FormStyle.css";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nameField: "",
      subbmitted: false
    };
  }

  handleName = e => {
    this.setState({
      nameField: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      submit: true
    });
  };
  render() {
    if (!this.state.submit)
      return (
        <div>
          <h3>Leave us a message</h3>
          <div className="form-div">
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={this.handleName}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <textarea placeholder="Leave your message" />
              <input type="submit" onClick={this.handleSubmit} />
            </form>
          </div>
        </div>
      );
    else
      return (
        <div>
          <h3>
            {" "}
            {this.state.nameField} your comment was subbmitted succesfully
          </h3>
        </div>
      );
  }
}

export default ContactForm;
