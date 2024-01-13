import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./signupform.css";
function SignupForm()
{
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
        <h1 className="text-center">Create your Account</h1>
        <Form.Item label="Name" name="fullname">
          <Input type="text" placeholder="Enter your Full Name" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" placeholder="Enter your Email Id" required />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input type="phone" placeholder="Enter your Phone Number" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" placeholder="Enter your Password" required />
        </Form.Item>
        <Form.Item label="Confirm Password" name="c_password">
          <Input type="password" placeholder="Re-Type your Password" required />
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