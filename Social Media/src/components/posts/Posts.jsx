import React from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const POSTS = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img: "https://images.pexels.com/photos/4451517/pexels-photo-4451517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet. In officia blanditiis et sunt voluptatem id ratione accusamus. Ea culpa omnis aut earum iusto qui rerum necessitatibus eos culpa incidunt qui tempora voluptas.",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img: "https://images.pexels.com/photos/4451517/pexels-photo-4451517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet. In officia blanditiis et sunt voluptatem id ratione accusamus. Ea culpa omnis aut earum iusto qui rerum necessitatibus eos culpa incidunt qui tempora voluptas.",
    },
    {
      id: 3,
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img: "https://images.pexels.com/photos/4451517/pexels-photo-4451517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet. In officia blanditiis et sunt voluptatem id ratione accusamus. Ea culpa omnis aut earum iusto qui rerum necessitatibus eos culpa incidunt qui tempora voluptas.",
    },
  ];
  return (
    <div className="posts">
      {POSTS.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
