import React from "react";
import "./custom.css";
import UserDisplay from "./tweetUserData";
import TweetIcons from "./tweetIcons";
import TweetData from "./tweetdata";

export default function Tweet(props) {
  return (
    <div className="tweet">
      <UserDisplay userData={props.data.userData} />
      <TweetData data={props.data.tweetData} />
      <TweetIcons />
    </div>
  );
}
