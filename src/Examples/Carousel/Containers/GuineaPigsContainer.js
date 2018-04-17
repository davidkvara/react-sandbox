import React from "react";
import GuineaPigs from "../Components/GuineaPigs";

const GUINEAPATHS = [
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg"
];

class GuineaPigsContainer extends React.Component {
  state = { currentGP: 0 };

  nextGP = () => {
    let current = this.state.currentGP;
    const next = (current += 1 % GUINEAPATHS.length);

    this.setState({ currentGP: next });
  };

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
}

export default GuineaPigsContainer;
