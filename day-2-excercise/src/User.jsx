import React from "react";
import "./User.css";
export default function User({ user }) {
  return (
    <div className="user-item">
      <div className="name">{user.first_name}</div>
      <div className="email">{user.email}</div>
      <div className="avatar">
        <img src={user.avatar} alt="" />
      </div>
    </div>
  );
}
