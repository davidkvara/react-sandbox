import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import "../app.css";

function ListItem(props) {
  return (
    <li>
      <Link to={props.to} className="al">
        {props.children}
      </Link>
    </li>
  );
}

const SiteName = () => (
  <Link to="/" className="navbar-brand">
    Next Web
  </Link>
);

const Header = () => {
  return (
    <header className="header">
      <Navbar style={{ marginBottom: 0 }} staticTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <SiteName />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <ListItem eventKey={1} to="/about">
              About
            </ListItem>
            <ListItem eventKey={2} to="/examples">
              examples
            </ListItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://github.com/davidkvara">
              github
            </NavItem>
            <NavItem eventKey={2} href="#">
              twitter
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
