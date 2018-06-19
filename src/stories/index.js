import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
// ჩემი კომპონენტები
import Tweet from "../learn/tweet/app";
import Calculator from "../learn/tutorials/Calculator";
import Game from "../learn/tutorials/Game";
import Shop from "../learn/tutorials/TIR";
import Todo from "../learn/Todos";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Tweet", module).add("with image", () => <Tweet />);
storiesOf("Calculator", module).add("tempeature converter", () => (
  <Calculator />
));
storiesOf("TicTacToe", module).add("tictactoe game", () => <Game />);
storiesOf("Todo", module).add("todo", () => <Todo />);
storiesOf("TIR", module).add("thinking in react", () => <Shop />);
