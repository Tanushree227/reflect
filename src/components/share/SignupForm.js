import React from "react";
import { Form, Input } from "antd";
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
      <Form
        layout="vertical"
        onSubmit={submitHandler}
        className="register-form card p-4"
      >
        <h1 className="text-center">Create your Account</h1>
        <Form.Item label="Name" name="fullname">
          <Input
            type="text"
            placeholder="Enter your Full Name"
            ref={fullnameInputRef}
            required
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input
            type="email"
            placeholder="Enter your Email Id"
            ref={emailInputRef}
            required
          />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input
            type="phone"
            placeholder="Enter your Phone Number"
            ref={phoneInputRef}
            required
          />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input
            type="password"
            placeholder="Enter your Password"
            ref={passwordInputRef}
            required
          />
        </Form.Item>
        <Form.Item label="Confirm Password" name="c_password">
          <Input
            type="password"
            placeholder="Re-Type your Password"
            ref={c_passwordInputRef}  
            required
          />
        </Form.Item>
        <p>
          Already have an Account?
          <Link to="/login" className="ms-2">
            Log-In
          </Link>
        </p>
        <div className="actions">
          <button type="submit">Sign-Up</button>  
        </div>
      </Form>
    </div>
  );
}

export default SignupForm;
