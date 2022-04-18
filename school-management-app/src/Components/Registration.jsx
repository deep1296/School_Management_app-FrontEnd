import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Registration/action";

export const Registration = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email , setEmail] = useState("");

  const check = name.length === 0 || password.length === 0;
  const dispatch = useDispatch();

  const handleRegister = () => {
    const payload = {
      name,
      email,
      password,
    };
    dispatch(register(payload));
  };

  const {loading,success,failure,errorMsg } =
    useSelector((state) => state.registration);
    // console.log(token,"token");

  if (success) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="Registration">
      <div>
        <h1>Registration</h1>

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
          onClick={handleRegister}
          style={{ width: "250px", height: "40px", fontSize: "20px" }}
          variant="contained"
          disabled={check}
        >
          REGISTRATION
        </button>
      </div>
      {loading && <h2>Loading...</h2>}
      {failure && <h2>{errorMsg}</h2>}
      {success && <h2>Registration Success</h2>}
    </div>
  );
};


