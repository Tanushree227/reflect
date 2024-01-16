import React from "react";
import "./signupform.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const onFinishHandler = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="form-container">
      <form
        layout="vertical"
        onSubmit={onFinishHandler}
        className="register-form card p-5"
      >
        <h1 className="text-center">Log in to your account</h1>
        <p>
          Don't have an account?
          <Link to="/signup" className="ms-2">
            Sign - Up
          </Link>
        </p>
        <div className="control">
        <label name="email">Email
          <input type="email" placeholder="Enter your Email Id" required />
        </label>
        </div>
        <div className="control">
        <label  name="password">Password
          <input type="password" placeholder="Enter your Password" required />
        </label>
        </div>
        <div className="actions">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
