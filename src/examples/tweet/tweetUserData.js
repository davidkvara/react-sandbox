import React from "react";

export default function UserDisplay(props) {
  return (
    <div className="user-wrapper">
      <a href="" className="user-link">
        <Avatar user={props.userData.avatar} />
        <UserName user={props.userData} />
      </a>
    </div>
  );
}

const Avatar = props => <img className="avatar" src={props.user} alt="" />;

const UserName = props => (
  <p className="username">
    <span className="user-title">{props.user.userDisplay}</span>{" "}
    <span className="user-title2">{props.user.username}</span>
  </p>
);
