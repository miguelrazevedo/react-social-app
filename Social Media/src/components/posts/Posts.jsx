import React from "react";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "react-query";
import { fetchPosts } from "../../queries.js";
import axios from "axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery("posts", fetchPosts);

  console.log(data);
  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "Loading..."
        : data.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
    </div>
  );
};

export default Posts;
