import React from "react";

const TweetData = props => {
  return (
    <div>
      <TweetText txt={props.data.tweetTxt} />
      {props.data.mediaImg && <Media pic={props.data.mediaImg} />}
    </div>
  );
};

const Media = props => (
  <div>
    <img className="mediaimg" src={props.pic} alt="" />
  </div>
);

function TweetText(props) {
  return <p className="tw-text">{props.txt}</p>;
}

export default TweetData;
