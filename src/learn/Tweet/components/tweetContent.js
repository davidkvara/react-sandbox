import React from "react";

const TweetData = ({ text, media }) => (
  <div>
    <TweetText content={text} />
    {media && <Media src={media} />}
  </div>
);

function Media(props) {
  return (
    <div>
      <img className="twt-media" alt="" {...props} />
    </div>
  );
}

function TweetText(props) {
  return <p className="tw-text">{props.content}</p>;
}

export default TweetData;
