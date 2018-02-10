// more at :: https://reactjs.org/docs/animation.html
// animating initial mounting
import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./some.css";

class Example extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="container">
          <h1>Fading at Initial Mount</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            commodi tenetur aperiam, nisi quasi qui accusamus illum eaque optio
            omnis praesentium dicta velit expedita libero eveniet autem eius
            quisquam hic.
          </p>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Example;
