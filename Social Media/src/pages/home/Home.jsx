import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import "./home.scss";
import CreatePost from "../../components/post/CreatePost";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <CreatePost />
      <Posts />
    </div>
  );
};

export default Home;
