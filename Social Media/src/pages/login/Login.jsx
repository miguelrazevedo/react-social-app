import { Link } from "react-router-dom";
import { useContext } from "react";
import "./login.scss";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet. Rem voluptas totam sit sapiente
            molestiae in iusto earum. Eos facilis tempora vel officiis animi in
            officia cupiditate? Et consequatur libero aut voluptatem expedita
            non ipsa earum eum quidem expedita.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
