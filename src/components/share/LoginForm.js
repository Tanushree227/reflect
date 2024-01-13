import React from "react";
import { Form, Input } from "antd";
import "./signupform.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const onFinishHandler = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form card p-5"
      >
        <h1 className="text-center">Log in to your account</h1>
        <p>
          Don't have an account?
          <Link to="/signup" className="ms-2">
            Sign - Up
          </Link>
        </p>
        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Enter your Email Id" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" placeholder="Enter your Password" required />
        </Form.Item>
        <div className="actions">
          <button type="submit">Log In</button>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
