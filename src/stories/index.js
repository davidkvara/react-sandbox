import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
// ჩემი კომპონენტები
import Tweet from "../examples/tweet/app";
import Calculator from "../examples/calculator";
import Game from "../examples/TicTacToe";
import Todo from "../examples/todo/todo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>emojis were here</Button>
  ));

storiesOf("Tweet", module).add("with image", () => <Tweet />);
storiesOf("Calculator", module).add("tempeature converter", () => (
  <Calculator />
));
storiesOf("TicTacToe", module).add("tictactoe game", () => <Game />);
storiesOf("Todo", module).add("todo", () => <Todo />);
