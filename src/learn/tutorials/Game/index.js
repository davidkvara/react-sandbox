import React from "react";
import "./style.css";

function Square(props) {
  // const helper = props.value === "X" ? " x-color" : "";
  return (
    <button
      className={"square" + (props.highlight ? " highlight" : "")}
      onClick={props.onSquareClick}
    >
      {props.value}
    </button>
  );
}

export default class Board extends React.Component {
  state = { squares: Array(9).fill(null), xIsNext: true, winnerLine: [] };

  handleSquareClick(i) {
    const squares = this.state.squares.slice();
    const winner = haveWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares, xIsNext: !this.state.xIsNext }, () => {
      this.highlightWinner();
    });
  }

  highlightWinner = () => {
    const winner = haveWinner(this.state.squares);
    if (winner) {
      this.setState({ winnerLine: winner.winningline });
    }
  };

  handleReset = () => {
    this.setState({ squares: Array(9).fill(null), winnerLine: [] });
  };

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onSquareClick={() => this.handleSquareClick(i)}
        highlight={this.state.winnerLine.includes(i)}
      />
    );
  }

  render() {
    const winner = haveWinner(this.state.squares);
    const draw = this.state.squares.every(x => x);
    let status;

    if (winner) {
      status = "Winner: " + winner.player;
    } else if (draw) {
      status = "Draw";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="board">
        <h2>{status}</h2>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {(winner || draw) && (
          <p>
            <button onClick={this.handleReset}>New game</button>
          </p>
        )}
      </div>
    );
  }
}

function haveWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        winningline: lines[i]
      };
    }
  }
  return null;
}
