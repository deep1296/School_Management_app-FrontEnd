import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { useSelector, useDispatch } from "react-redux";
import { Registration } from "./Components/Registration";
import { Navbar } from "./Components/Navbar";
import { Classes } from "./Components/Classes";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
function App() {

  const { isAuthenticated } = useSelector((state) => state.login);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
          <Route
          path="/teachers/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
             <Classes/>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
