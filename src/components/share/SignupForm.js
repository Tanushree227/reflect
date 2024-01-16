import React from "react";
import { Link } from "react-router-dom";
import "./signupform.css";
import { useRef } from "react";

function SignupForm(props) {
  const fullnameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const passwordInputRef = useRef();
  const c_passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = fullnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredCPassword = c_passwordInputRef.current.value;

    const userData = {
      fullname: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      password: enteredPassword,
      c_password: enteredCPassword,
    };
        props.onSignup(userData);
  }

  return (
    <div className="form-container">
      <form
        layout="vertical"
        onSubmit= {submitHandler}
        className="register-form card p-4"
      >
        <h1 className="text-center">Create your Account</h1>
        <div className="control">
        <label name="fullname">Name
          <input
            type="text"
            placeholder="Enter your Full Name"
            ref={fullnameInputRef}
            required
          />
        </label>
        </div>
        <div className="control">
        <label name="email">Email
          <input
            type="email"
            placeholder="Enter your Email Id"
            ref={emailInputRef}
            required
          />
        </label>
        </div>
        <div className="control">
        <label name="phone">Phone
          <input
            type="phone"
            placeholder="Enter your Phone Number"
            ref={phoneInputRef}
            required
          />
        </label>
        </div>
        <div className="control">
        <label label="Password" name="password">Password
          <input
            type="password"
            placeholder="Enter your Password"
            ref={passwordInputRef}
            required
          />
        </label>
        </div>
        <div className="control">
        <label name="c_password">Confirm Password
          <input
            type="password"
            placeholder="Re-Type your Password"
            ref={c_passwordInputRef}  
            required
          />
        </label>
        </div>
        <p>
          Already have an Account?
          <Link to="/login" className="ms-2">
            Log-In
          </Link>
        </p>
        <div className="actions">
          <button type="submit">Sign-Up</button>  
        </div>
      </form>
    </div>
  );
}

export default SignupForm;