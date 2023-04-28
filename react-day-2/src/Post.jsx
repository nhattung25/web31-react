import React from "react";

export default function Post({ post }) {
  //   const { post } = props;

  return (
    <div
      className="post
    "
    >
      <div className="thumbnail">
        <img src={post.thumbnail} alt="" />
      </div>
      <div className="heading">{post.title} </div>
      <div className="text">{post.content}</div>
      <div className="footer">
        <div className="view">{post.view}</div>
        <div className="date">{post.date}</div>
      </div>
    </div>
  );
}
