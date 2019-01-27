import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
const Register = props => {
  const { handleSubmit, handleChange, errors,isValid,dirty ,isSubmitting } = props;
  console.log(props);
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
          help={errors.email}
        >
          <Input
            id="email"
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.password ? "error" : ""}
          help={errors.password}
        >
          <Input
            id="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.confirm_password ? "error" : ""}
          help={errors.confirm_password}
        >
          <Input
            id="confirm_password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
         
          <Button disabled={!(dirty && isValid) || isSubmitting} type="primary" htmlType="submit" style={{ width: `100%` }}>
            Register
          </Button>
          Already have an account? <Link to="login">Sign In here</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

const RegisterForm = withFormik({
  isInitialValid: true,
  validate: values => {
    let errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z0-9-]+)$/i.test(
        values.email
      )
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Required";
    }

    if (values.password !== values.confirm_password) {
      
      errors.confirm_password = "Confirm Password and password should match";
    }

    return errors;
  },
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    console.log(values);
  },
  displayName: "RegisterForm"
})(Register);

export default RegisterForm;
