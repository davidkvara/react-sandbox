import React, { Component } from "react";
import Stars from "./components/Stars";
import "./style.css";

class App extends Component {
  state = {
    starsCount: Array(5).fill(null),
    starsSelected: 2,
    starsHoveredOver: 0
  };

  handleSelect = starsSelected => {
    this.setState({ starsSelected });
  };

  hoverOver = starsHoveredOver => {
    this.setState({ starsHoveredOver });
  };

  hoverOut = () => {
    this.setState({ starsHoveredOver: 0 });
  };

  render() {
    const { starsSelected, starsCount, starsHoveredOver } = this.state;

    return (
      <div className="star-container">
        <div>
          <Stars
            stars={starsCount}
            selected={starsSelected}
            hoveredStars={starsHoveredOver}
            onSelect={this.handleSelect}
            onHover={this.hoverOver}
            onMouseOut={this.hoverOut}
          />
          <p className="large">
            selected {starsSelected} of {starsCount.length}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
