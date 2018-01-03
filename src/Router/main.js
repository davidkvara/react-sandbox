import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "./pages.css";
import { Home, About, Blog } from "./home";

const Header = styled.header`
  background: #f0f0f0;
  padding: 1.5em 1em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1em 0 0;
  }
`;

const Main = styled.main`
  background: linen;
  padding: 1em 1em 2em;
`;

const Nav = styled.ul`
  display: flex;
  @media (max-width: 580px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ListItem = props => (
  <li className="list">
    <Link to={props.to}>{props.label}</Link>
  </li>
);

const SiteName = props => (
  <div>
    <Link className="sax" to={props.to}>
      {props.title}
    </Link>
  </div>
);

class Layout extends React.Component {
  state = { toggle: false };

  render() {
    return (
      <div className="niceapp">
        <Header>
          <SiteName to="/react-app" title="NiceSite" />
          <Nav see={this.state.toggle}>
            <ListItem to="/react-app" label="Home" />
            <ListItem to="/about" label="About" />
            <ListItem to="/blog" label="Blog" />
          </Nav>
        </Header>

        <Main>
          <Route exact path="/react-app" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Main>
        <footer className="footer">NiceSite &copy; all rights reserved</footer>
      </div>
    );
  }
}

export default Layout;
