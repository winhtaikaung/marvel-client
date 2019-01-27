import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
const Login = (props) => {
  const { handleSubmit, handleChange, errors,isValid,dirty ,isSubmitting } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: `calc(100vh/3)`
      }}
    >
      <Form onSubmit={handleSubmit} style={{ maxWidth: `300px` }}>
        <Form.Item
         validateStatus={errors.email ? "error" : ""}
         help={errors.email}>
          <Input
            id="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
         validateStatus={errors.password ? "error" : ""}
         help={errors.password}>
          <Input
            id="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          
          <Button disabled={!(dirty && isValid) || isSubmitting} type="primary" htmlType="submit" style={{ width: `100%` }}>
            Log in
          </Button>
          Dont have an account? <Link to="register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

const LoginForm = withFormik({
  isInitialValid: true,
  validate: values => {
    let errors = {};
    
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z0-9-]+)$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if(!values.password){
      errors.password="Required";
    }
    
    return errors
    
  },
  handleSubmit:(values,{props,setSubmitting,resetForm})=>{
    console.log(values)
    
  },
  displayName:"LoginForm"
})(Login);

export default LoginForm;
