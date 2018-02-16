import React from "react";
import { Link, Route } from "react-router-dom";
import Game from "../../examples/TicTacToe";
import Calculator from "../../examples/calculator";
import Todo from "../../examples/todo";

export default ({ match }) => (
  <div className="example-page">
    <div className="container">
      <h3>Choose Example</h3>
      <ul>
        <li>
          <Link to={`${match.url}/tic-tac-toe`}>Tic Tac Toe</Link>
        </li>
        <li>
          <Link to={`${match.url}/calculator`}>Calculator</Link>
        </li>
        <li>
          <Link to={`${match.url}/todo`}>Todo app</Link>
        </li>
        <li>Distinctio obcaecati veniam iure!</li>
      </ul>
      <hr />
      <Route exact path={`${match.url}/:topicId`} component={Topic} />
    </div>
  </div>
);

const Topic = ({ match }) => {
  if (match.params.topicId === "calculator") {
    return <Calculator />;
  } else if (match.params.topicId === "tic-tac-toe") {
    return <Game />;
  } else if (match.params.topicId === "todo") {
    return <Todo />;
  }
};
