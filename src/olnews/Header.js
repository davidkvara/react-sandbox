import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper hf">
          <div>
            <a className="home" href="">
              ol' News
            </a>
          </div>
          <ul className="menu">
            <li>
              <a className="menu-i active" href="">
                home
              </a>
            </li>
            <li>
              <a className="menu-i" href="">
                about
              </a>
            </li>
            <li>
              <a className="menu-i" href="">
                blog
              </a>
            </li>
            <li>
              <a className="menu-i" href="">
                contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
