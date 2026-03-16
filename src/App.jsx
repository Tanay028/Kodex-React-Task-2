import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="main-container">

      <div className="form-box">

        <div className="left-section">
          <h1>Welcome</h1>
          <p>Create an account or login to continue</p>
        </div>

        <div className="right-section">
          {toggle ? (
            <Login setToggle={setToggle}/>
          ) : (
            <Register setToggle={setToggle}/>
          )}
        </div>

      </div>

    </div>
  );
}

export default App;