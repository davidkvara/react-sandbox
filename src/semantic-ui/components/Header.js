import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          background: "#fff",
          padding: 8,
          borderBottom: "1px solid #eee"
        }}
      >
        <Container>
          <Menu secondary>
            <nav>
              <MenuItem to="/">Page</MenuItem>
              <MenuItem to="/test">Other Page</MenuItem>
            </nav>
          </Menu>
        </Container>
      </header>
    );
  }
}

const MenuItem = props => (
  <Link
    {...props}
    style={{ padding: "10px 16px", color: "#555", display: "inline-block" }}
  />
);

export default Header;
