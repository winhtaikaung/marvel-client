import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
const Register  = () =>{
    return (
        <div style={{ display: "flex", justifyContent: "center",marginTop:`calc(100vh/3)`}}>
      <Form onSubmit={() => {}} style={{ maxWidth: `300px` }}>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <Link style={{ float: `right` }} to="">
            Forgot password
          </Link>
          <Button type="primary" htmlType="submit" style={{ width: `100%` }}>
            Register
          </Button>
          Or <Link to="#">register now!</Link>
        </Form.Item>
      </Form>
    </div>
    )
}

export default Register;