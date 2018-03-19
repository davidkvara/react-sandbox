import React from "react";
import Tweet from "./tweet";
import mediaImg from "./img/DWzLTRmVAAANYl9.jpg";
import avatar from "./img/HdRauDM-_400x400.jpg";

export default () => (
  <div className="app">
    <div className="container-tw">
      <Tweet data={tweet} />
    </div>
  </div>
);

const tweet = {
  userData: {
    username: "@TheEconomist",
    userDisplay: "The Economist",
    avatar: avatar
  },
  tweetData: {
    mediaImg: mediaImg,
    tweetTxt:
      "HSBC's former boss, Stuart Gulliver, has freed the bank of some legal snares and hands over a safer balance-sheet"
  }
};
