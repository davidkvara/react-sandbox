import React from "react";
import { Link, Route } from "react-router-dom";
import Game from "../../examples/TicTacToe";
import Calculator from "../../examples/calculator";

export default ({ match }) => (
  <div className="container">
    <h2>Choose Example</h2>
    <ul>
      <li>
        <Link to={`${match.url}/tic-tac-toe`}>Tic Tac Toe</Link>
      </li>
      <li>
        <Link to={`${match.url}/calculator`}>Calculator</Link>
      </li>
      <li>Repellendus explicabo laboriosam recusandae!</li>
      <li>Distinctio obcaecati veniam iure!</li>
    </ul>
    <hr />
    <Route path={`${match.url}/:topicId`} component={Topic} />
  </div>
);

const Topic = ({ match }) => {
  if (match.params.topicId === "calculator") {
    return <Calculator />;
  } else if (match.params.topicId === "tic-tac-toe") {
    return <Game />;
  }
};
