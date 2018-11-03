import React from "react";
import styled from "styled-components";

const AppContext = React.createContext({ name: "David Kvaratskhelia" });
// without Provider consumer will have access to initial value

export default () => (
  <div className="container">
    <h1>Example #2</h1>
    <hr />
    <Sidebar />
  </div>
);

const Sidebar = () => (
  <ResponsiveSidebar>
    <Title>Sidebar</Title>
    <p>
      Odio aspernatur harum omnis vitae quas officia maiores voluptatem ullam,
      ratione aliquam alias cum eius eveniet ipsam magnam hic optio totam a.
    </p>
    <AuthorData />
  </ResponsiveSidebar>
);

const AuthorData = () => (
  <AppContext.Consumer>
    {context => (
      <div style={{ border: "3px solid gold", padding: 10 }}>
        <Title>{context.name}</Title>
        {context.description ? <p>{context.description}</p> : <p>The Man</p>}
      </div>
    )}
  </AppContext.Consumer>
);

const Title = props => (
  <h2 style={{ marginTop: 0 }}>
    <b>{props.children}</b>
  </h2>
);

const ResponsiveSidebar = styled.aside`
  padding: 1rem;
  border: 3px solid firebrick;
  background: #f7f8f9;
  max-width: 94%;
  margin: 0 auto;
  @media (min-width: 700px) {
    width: 320px;
    float: right;
  }
`;
