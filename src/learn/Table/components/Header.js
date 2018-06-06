import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header>
    <h1>Welcome to {title}</h1>
    <p>The best place to buy vehicles online</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
