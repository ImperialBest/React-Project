import React from 'react'
import { Link } from "react-router-dom";
import Login from '../Login/Login';

function SignUp() {
  const checkInput = ()=>{
    if (input === "") {
      alert ("write your Fullname")
    }
  }
  return (
    <div className="formfield">
    <form className="firstform">
      <div className="input-field">
        <label for="name1">
          <p id="name">Fullname: </p>
        </label>
        <input type="text"  id="name1" />
      </div>
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
      <div className="input-field">
        <label for="pass2">
          <p id="name">Confirm Password: </p>
        </label>
        <input type="text" id="pass2" />
      </div>
    </form>
    <button onClick={checkInput}>
      <Link to="/login" >Sign Up</Link>
    </button>
  </div>

  )
}

export default SignUp;