import { useState } from "react";
import { Navigate ,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Login/action";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email , setEmail] = useState("");

  const check = name.length === 0 || password.length === 0;
  const dispatch = useDispatch();

  const handleLogin = () => {
    const payload = {
      name,
      email,
      password,
    };
    dispatch(login(payload));
  };

  const { isLoading, isSuccess, isFailure, errorMsg, isAuthenticated ,token } =
    useSelector((state) => state.login);
    // console.log(token,"token");

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login">
      <div>
        <h1>Login</h1>

        <input
          style={{ width: "250px", height: "40px", fontSize: "20px" }}
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <input
          style={{ width: "250px", height: "40px", fontSize: "20px" }}
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          style={{ width: "250px", height: "40px", fontSize: "20px" }}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button
          onClick={handleLogin}
          style={{ width: "250px", height: "40px", fontSize: "20px" }}
          variant="contained"
          disabled={check}
        >
          LOGIN
        </button>
        <p ></p>
        <p>Not Register please <Link to = "/register"> Register </Link></p>
      </div>
      {isLoading && <h2>Loading...</h2>}
      {isFailure && <h2>{errorMsg}</h2>}
      {isSuccess && <h2>Login Success</h2>}
    </div>
  );
};
