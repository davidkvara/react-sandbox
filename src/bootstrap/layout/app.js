import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/header";
import Home from "../routes/index";
import About from "../routes/about";
import Examples from "../routes/examples";

const Layout = props => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/examples" component={Examples} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

const NoMatch = () => (
  <div className="hero-container text-center">
    <div className="container">
      <p>404 | Page not found</p>
    </div>
  </div>
);

export default Layout;
