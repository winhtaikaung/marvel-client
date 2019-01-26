
import {POST_SIGN_IN,POST_SIGN_IN_SUCCESS,POST_SIGN_IN_FAILED} from './constants';

export const userSignIn = (payload,callback) => {
    return {
      type: POST_SIGN_IN,
      endpoint: `/auth`,
      noAuth: true,
      method: 'post',
      types: [POST_SIGN_IN, POST_SIGN_IN_SUCCESS, POST_SIGN_IN_FAILED],
      instantAction: response => {
        localStorage.setItem('currentUser', true)
        localStorage.setItem('authUser', JSON.stringify(response))
      },
      callback:callback,
      params: payload,
    }
  }