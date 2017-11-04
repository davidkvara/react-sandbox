import React, { Component } from "react";

export class GriItem extends Component {
  render() {
    return (
      <div className="grid-items">
        <img src={this.props.pic} className="article-pic" alt="" />
        <div className="c-wrap">
          <h3 className="ar-title">{this.props.header}</h3>
          {this.props.news}
        </div>
      </div>
    );
  }
}

export default GriItem;
