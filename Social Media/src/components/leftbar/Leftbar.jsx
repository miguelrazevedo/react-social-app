import "./leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePicture}></img>
            <span>{currentUser.name}</span>
          </div>

          <MenuItem imagePath={Friends} itemName="Friends" />
          <MenuItem imagePath={Groups} itemName="Groups" />
          <MenuItem imagePath={Market} itemName="Marketplace" />
          <MenuItem imagePath={Watch} itemName="Watch" />
          <MenuItem imagePath={Memories} itemName="Memories" />
          <hr />
        </div>

        <div className="menu">
          <span>Your shortcuts</span>
          <MenuItem imagePath={Events} itemName="Events" />
          <MenuItem imagePath={Gaming} itemName="Gaming" />
          <MenuItem imagePath={Gallery} itemName="Gallery" />
          <MenuItem imagePath={Videos} itemName="Videos" />
          <MenuItem imagePath={Messages} itemName="Messages" />
          <hr />
        </div>

        <div className="menu">
          <span>Others</span>
          <MenuItem imagePath={Tutorials} itemName="Tutorials" />
          <MenuItem imagePath={Courses} itemName="Courses" />
          <MenuItem imagePath={Fund} itemName="Fund" />
          <hr />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ imagePath, itemName }) => {
  return (
    <div className="item">
      <img src={imagePath} alt="icon" />
      <span>{itemName}</span>
    </div>
  );
};

export default Leftbar;
