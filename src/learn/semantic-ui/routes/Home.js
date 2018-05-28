import React from "react";
import {
  Button,
  Container,
  Input,
  Segment,
  Transition,
  Header as H1,
  Divider
} from "semantic-ui-react";

class Home extends React.Component {
  state = {
    todos: ["whatever", "just say something"],
    text: "",
    hasError: false,
    hide: 500,
    show: 500,
    visible: true
  };

  handleChange = e => {
    this.setState({ text: e.target.value, hasError: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.text;
    if (!text.trim()) {
      this.setState({ hasError: true });
      return;
    }
    this.setState({
      todos: [...this.state.todos, text],
      text: ""
    });
  };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { show, visible, hide } = this.state;
    return (
      <div style={{ background: "#f9f9f9", padding: "3rem 0" }}>
        <Container>
          <Transition duration={{ hide, show }} visible={visible}>
            <H1 size="huge">Hello! is it me you're looking for?</H1>
          </Transition>
          <p>{this.state.text}</p>
          <Button basic color="grey" onClick={this.toggleVisibility}>
            toggle
          </Button>
          <Divider />

          <form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Say what?"
              value={this.state.text}
              error={this.state.hasError}
              onChange={this.handleChange}
            />
            <Button basic color="blue" onClick={this.handleClick}>
              add
            </Button>
          </form>

          {this.state.todos.length > 0 && (
            <div style={{ maxWidth: 500, padding: "1rem 0" }}>
              <Segment.Group stacked>
                {this.state.todos.map((todo, i) => (
                  <Segment size="large" key={i}>
                    {todo}
                  </Segment>
                ))}
              </Segment.Group>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Home;
