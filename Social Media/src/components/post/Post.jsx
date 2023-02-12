import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";

import "./post.scss";
import Comments from "../comments/Comments";
const Post = ({ post }) => {
  // * Temporary
  const liked = false;
  const [openComment, setOpenComment] = useState(false);
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePicture} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">a few seconds ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        <div className="buttons">
          <div className="item">
            {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>

          <div className="item" onClick={() => setOpenComment(!openComment)}>
            <SmsOutlinedIcon />
            12 Comments
          </div>

          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {openComment && <Comments />}
      </div>
    </div>
  );
};

export default Post;
