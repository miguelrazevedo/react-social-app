import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
const Register = () => {
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });

  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", inputs);
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet. Rem voluptas totam sit sapiente
            molestiae in iusto earum. Eos facilis tempora vel officiis animi in
            officia cupiditate? Et consequatur libero aut voluptatem expedita
            non ipsa earum eum quidem expedita.
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputs}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputs}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputs}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputs}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
