import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formfield">
      <form className="firstform">
        <div className="input-field">
          <label for="name2">
            <p id="name">Username: </p>
          </label>
          <input type="text" id="name2" />
        </div>
        <div className="input-field">
          <label for="pass1">
            <p id="name">Password: </p>
          </label>
          <input type="text" id="pass1" />
        </div>
      </form>
      <button>
        <Link to="/">Login In</Link>
        {/* <link to="/signup">SignUp</link> */}
      </button>
    </div>
  );
};

export default Login;
