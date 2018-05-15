import React from "react";

const TweetIcons = () => (
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
);

export default TweetIcons;
