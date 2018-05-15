import React from "react";

class AsyncData extends React.Component {
  state = { results: [] };

  componentDidMount() {
    this.handleCall();
  }

  async handleCall() {
    try {
      const data = await fetch("https://api.randomuser.me/?nat=US&results=10");
      const results = await data.json();
      const users = results.results.map(result => ({
        name: result.name.first,
        lastname: result.name.last,
        id: result.id.value
      }));
      this.setState({ results: users });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { results } = this.state;
    const items = results.map(result => (
      <li key={result.id}>
        <strong>name:</strong> {result.name}, <strong>lastname:</strong>{" "}
        {result.lastname}
      </li>
    ));

    return (
      <div>
        <h3>our users</h3>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default AsyncData;
