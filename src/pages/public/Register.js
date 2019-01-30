import React from 'react';
import { Form, Icon, Input, Button, notification, Avatar } from 'antd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik';
import {
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectAuthUser,
  makeSelectError
} from '../../containers/App/selectors';
import {  userRegister } from '../../containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { StyledForm } from '../../components/StyledForm';
const Register = props => {
  const {
    handleSubmit,
    handleChange,
    errors,
    isValid,
    dirty,
    isSubmitting
  } = props;
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: `calc(100vh/8)`
      }}
    >
      <StyledForm onSubmit={handleSubmit}>
      <p style={{textAlign:`center`}}> <Avatar style={{backgroundColor:`#f56a00`}} shape='circle' size={64} icon='user' /></p>
      <h1 style={{textAlign:`center`}}>Register</h1>
        <Form.Item
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email}
        >
          <Input
            id='email'
            prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Enter your email'
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password}
        >
          <Input
            id='password'
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.confirm_password ? 'error' : ''}
          help={errors.confirm_password}
        >
          <Input
            id='confirm_password'
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={!(dirty && isValid) || isSubmitting}
            type='primary'
            htmlType='submit'
            style={{ width: `100%` }}
          >
            Register
          </Button>
          Already have an account? <Link to='login'>Sign In here</Link>
        </Form.Item>
      </StyledForm>
    </div>
  );
};

const RegisterForm = withFormik({
  isInitialValid: true,
  validate: values => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z0-9-]+)$/i.test(
        values.email
      )
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.confirm_password) {
      errors.confirm_password = 'Required';
    }

    if (values.password !== values.confirm_password) {
      errors.confirm_password = 'Confirm Password and password should match';
    }

    return errors;
  },
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    props.doRegister(values, (response, error) => {
      setSubmitting(false);
      localStorage.setItem('isFirstTime',true);
      if (response) {
        
        notification.success({
          duration: 0,
          message: 'Registration success!',
          description: <p>Click <a href='/login'>here</a> to Login</p>
        });
      } else {
        notification.error({
          message: 'Oops Something went wrong!',
          description:
            'You registration process was failed due to server error.Please Try again'
        });
      }
    });
  },
  displayName: 'RegisterForm'
})(Register);

const mapDispatchToProps = dispatch => ({
  doRegister: (payload, callback) => dispatch(userRegister(payload, callback))
});
const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  authUser: makeSelectAuthUser()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(RegisterForm);
