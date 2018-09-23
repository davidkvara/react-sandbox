import React from "react";

const UserDisplay = ({ user }) => (
  <div className="user-wrapper">
    <a href="" className="user-profile-link">
      <Avatar src={user.avatar} alt={user.userDisplayName} />
      <UserName {...user} />
    </a>
  </div>
);

function Avatar(props) {
  return <img className="avatar" alt="" {...props} />;
}

function UserName({ username, userDisplayName }) {
  return (
    <p className="twt-title">
      <span className="user-name">{userDisplayName} </span>
      <span className="user-username">{username}</span>
    </p>
  );
}

export default UserDisplay;
