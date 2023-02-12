import React, { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
const Comments = () => {
  // * Temporary
  const COMMENTS = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet. Sit dolor numquam ut libero consequatur qui repellat deleniti hic dolores enim qui totam galisum!",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/1905975/pexels-photo-1905975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      desc: "Ut fugiat quisquam id veritatis voluptas eum numquam officia sit optio sunt sit explicabo nulla sed doloremque sequi est recusandae perferendis",
      name: "John Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1905975/pexels-photo-1905975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      desc: "Aut voluptas atque ea perferendis enim ea autem nihil est enim nihil eum nisi tempore.",
      name: "John Doe",
      userId: 3,
      profilePicture:
        "https://images.pexels.com/photos/1905975/pexels-photo-1905975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {COMMENTS.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <img src={comment.profilePicture} alt="" />
            <div className="commentInfo">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
