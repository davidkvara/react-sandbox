import React from "react";

const Header = props => (
  <header className="header">
    <h1 className="title">{props.children}</h1>
  </header>
);

export default Header;
