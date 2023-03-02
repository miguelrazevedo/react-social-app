import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./createPost.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";

import { useMutation, useQueryClient } from "react-query";
import { createPost, uploadPhoto } from "../../queries";
function CreatePost() {
  // User Object
  const { currentUser } = useContext(AuthContext);

  // States
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);

  // React Query
  const queryClient = useQueryClient();
  const mutation = useMutation((newPost) => createPost(newPost), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("posts");
    },
  });

  // Functions
  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) {
      imgUrl = await upload();
    }
    mutation.mutate({ description: input, img: imgUrl });
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await uploadPhoto(formData);
      return response.data.message;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="createPost">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={"/uploads/" + currentUser.profilePicture} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
