import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/index";
import About from "../pages/about";
import Examples from "../pages/examples";

const Layout = props => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/examples" component={Examples} />
      </div>
    </div>
  );
};

export default Layout;
