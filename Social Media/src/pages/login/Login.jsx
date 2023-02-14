import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./login.scss";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
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
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputs}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputs}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
        {error && error}
      </div>
    </div>
  );
};

export default Login;
