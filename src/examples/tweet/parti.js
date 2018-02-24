import React from "react";
import "./custom.css";
import mediaImg from "./img/DWzLTRmVAAANYl9.jpg";
import avatar from "./img/HdRauDM-_400x400.jpg";

export default () => {
  return (
    <div className="tweet">
      <div className="content">
        <a href="" className="user-link">
          <img className="avatar" src={avatar} alt="" />
          <p className="username">
            <span className="user-title">The Economist</span>{" "}
            <span className="user-title2">@TheEconomist</span>
          </p>
        </a>
        <p className="tw-text">
          HSBC's former boss, Stuart Gulliver, has freed the bank of some legal
          snares and hands over a safer balance-sheet{" "}
          <a href="" className="twt-link">
            http://econ.st/2FoM6lf
          </a>
        </p>
      </div>
      <div>
        <img className="mediaimg" src={mediaImg} alt="" />
      </div>
      <div className="action-btns">
        <button className="tw-btn reply">
          <span className="rply-icon twicon" />
          <span className="twt-count">25</span>
        </button>
        <button className="tw-btn retweet">
          <span className="retweet-icon twicon" />
          <span className="twt-count">245</span>
        </button>
        <button className="tw-btn favorite">
          <span className="favorite-icon twicon" />
          <span className="twt-count">477</span>
        </button>
        <button className="tw-btn message">
          <span className="message-icon twicon" />
        </button>
      </div>
    </div>
  );
};
