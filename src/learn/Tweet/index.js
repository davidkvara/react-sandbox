import React from "react";
import "./style.css";

import UserIdentity from "./components/tweetUserData";
import TweetContent from "./components/tweetContent";
import TweetIcons from "./components/tweetIcons";

import { tweets } from "./API";

export default () => (
  <div className="twt-wrapper">
    {tweets.map((tweet, i) => (
      <Tweet {...tweet} key={i} />
    ))}
  </div>
);

const Tweet = ({ userData, tweetData }) => (
  <div className="tweet">
    <UserIdentity user={userData} />
    <TweetContent {...tweetData} />
    <TweetIcons /> {/* static at this point */}
  </div>
);
