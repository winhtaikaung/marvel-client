
import {POST_SIGN_IN,POST_SIGN_IN_SUCCESS,POST_SIGN_IN_FAILED,POST_REGISTER, POST_REGISTER_SUCCESS, POST_REGISTER_FAILED, USER_SIGN_OUT, USER_SIGN_OUT_SUCCESS, USER_SIGN_OUT_FAILED} from './constants';

export const userSignIn = (payload,callback) => {
    return {
      type: POST_SIGN_IN,
      rootUrl:`https://reqres.in`,
      endpoint: `/api/login`,
      noAuth: true,
      method: 'post',
      types: [POST_SIGN_IN, POST_SIGN_IN_SUCCESS, POST_SIGN_IN_FAILED],
      instantAction: response => {
        localStorage.setItem('currentUser', true)
        localStorage.setItem('authUser', JSON.stringify(response))
      },
      params: payload,
      callback:callback
    }
  }

  export const userRegister = (payload,callback) => {
    return {
      type: POST_REGISTER,
      rootUrl:`https://reqres.in`,
      endpoint: `/api/register`,
      noAuth: true,
      method: 'post',
      types: [POST_REGISTER, POST_REGISTER_SUCCESS, POST_REGISTER_FAILED],
      params: payload,
      callback:callback

    }
  }

  export const userSignOut = payload => {
    return {
      type: USER_SIGN_OUT,
      payload,
    }
  }
  
  export const userSignOutSuccess = payload => {
    return {
      type: USER_SIGN_OUT_SUCCESS,
      payload,
    }
  }
  
  export const userSignOutFail = error => {
    return {
      type: USER_SIGN_OUT_FAILED,
      error,
    }
  }