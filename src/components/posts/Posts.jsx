import Post from "../post/Post";
import "./posts.css";
import data from "/Users/harrisonpounds/Desktop/Hack Utd/src/MockData.js"
import React from "react"

export default function Posts() {
  const posts = data.map(item => {
    return (
      <Post
        key = {item.id}
        item = {item}
      />
    )
  })
  return (
    <div className="posts">
        {posts}
    </div>
  );
}
