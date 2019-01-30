import React from 'react';
import { Form, Icon, Input, Button, notification, Avatar } from 'antd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik';
import {makeSelectCurrentUser, makeSelectLoading, makeSelectAuthUser,makeSelectError} from '../../containers/App/selectors';
import {userSignIn} from '../../containers/App/actions';

import {createStructuredSelector} from 'reselect';
import {StyledForm} from '../../components/StyledForm';

const Login = (props) => {
  console.log(props)
  const { handleSubmit, handleChange, errors,isValid,dirty ,isSubmitting } = props;
  
  return (
    <React.Fragment>
      
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: `calc(100vh/8)`
      }}
    >
    
      <StyledForm onSubmit={handleSubmit} >
      <p style={{textAlign:`center`}}> <Avatar style={{backgroundColor:`#f56a00`}} shape='circle' size={64} icon='lock' /></p>
        <h1 style={{textAlign:`center`}}>Login</h1>
        <Form.Item
         validateStatus={errors.email ? 'error' : ''}
         help={errors.email}>
          <Input
            id='email'
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Enter your email'
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
         validateStatus={errors.password ? 'error' : ''}
         help={errors.password}>
          <Input
            id='password'
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          
          <Button disabled={!(dirty && isValid) || isSubmitting} type='primary' htmlType='submit' style={{ width: `100%` }}>
            Log in
          </Button>
          Dont have an account? <Link to='register'>register now!</Link>
        </Form.Item>
      </StyledForm>
    </div></React.Fragment>
  );
};

const LoginForm = withFormik({
  isInitialValid: true,
  validate: values => {
    let errors = {};
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z0-9-]+)$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if(!values.password){
      errors.password='Required';
    }
    
    return errors
    
  },
  handleSubmit:(values,{props,setSubmitting,resetForm})=>{
    props.doLogin(values,(response,err)=>{
      
      if(response){
        notification.success({
          duration: 1,
          message: 'Login Success!',
          
        });
      }else{
        notification.error({
          message: 'Oops Something went wrong!',
          description:
            'Login failed due to server error.Please Try again'
        });
      }
      setSubmitting(false)
    })
    
  },
  displayName:'LoginForm'
})(Login);

const mapDispatchToProps = dispatch => ({
  doLogin:(payload,callback)=>dispatch(userSignIn(payload,callback))
});
const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  authUser: makeSelectAuthUser(),

});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default compose(withConnect)(LoginForm);
