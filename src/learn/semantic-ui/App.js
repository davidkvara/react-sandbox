import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Test from "./routes/Test";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </div>
  );
};

export default App;
