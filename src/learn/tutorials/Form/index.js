import React, { Component } from "react";

class Form extends Component {
  state = {
    fullName: "",
    letterType: "feature request",
    letter: "",
    rememberMe: true
  };

  handleChange = e => {
    // ids store state keys, changed after adding labels
    // probably not a good idea
    // Todo: revert to name attr
    const { type, id, value, checked } = e.target;
    const isCheckbox = type === "checkbox";
    this.setState({
      [id]: isCheckbox ? checked : value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = Object.values(this.state);

    if (!values.every(Boolean)) {
      console.error("could not pass validation");
      return;
    }
    console.log(this.state);
  };

  render() {
    const { fullName, letter, remember, letterType } = this.state;

    return (
      <div className="container">
        <h2>React Form</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="fullName" style={{ display: "block" }}>
              Full Name
            </label>
            <input
              id="fullName"
              value={fullName}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="letterType" style={{ display: "block" }}>
              Letter Type
            </label>
            <select
              value={letterType}
              id="letterType"
              onChange={this.handleChange}
            >
              <option>feature request</option>
              <option>bug fix</option>
              <option>offer</option>
              <option>other</option>
            </select>
          </p>
          <p>
            <label htmlFor="letter" style={{ display: "block" }}>
              Letter
            </label>
            <textarea
              value={letter}
              id="letter"
              onChange={this.handleChange}
              cols="28"
              rows="6"
            />
          </p>
          <p>
            <input
              type="checkbox"
              id="rememberMe"
              onChange={this.handleChange}
              checked={remember}
            />
            <label htmlFor="rememberMe">remember me</label>
          </p>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Form;
