import React from "react";

import { Form, Icon, Input, Button, Checkbox } from "antd";
import "../style/Login.css";

const LoginForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className="form">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          <p>GrabIT</p>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)", fontSize: '18px' }} />}
              placeholder="Username"
              size="large"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)", fontSize: '18px' }} />}
              type="password"
              placeholder="Password"
              size="large"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const Login = Form.create({ name: "normal_login" })(LoginForm);

export default Login;
