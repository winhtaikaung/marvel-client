import {
  POST_SIGN_IN,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_IN_FAILED,
  POST_REGISTER,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILED, 
  USER_SIGN_OUT, 
  USER_SIGN_OUT_SUCCESS, 
  USER_SIGN_OUT_FAILED
} from '../constants';

import {
  userSignIn,
  userRegister, 
  userSignOut, 
  userSignOutSuccess, 
  userSignOutFail
} from '../actions';

describe('App Actions', () => {
  describe('userSignIn', () => {
    it('should return the correct type', () => {
      const payload = {
        foo: 'bar'
      };
      const callback = (response, error) => {};
      const expectedResult = {
        type: POST_SIGN_IN,
        rootUrl: `https://reqres.in`,
        endpoint: `/api/login`,
        noAuth: true,
        method: 'post',
        instantAction: response => {
          console.log('FOO');
        },
        types: [POST_SIGN_IN, POST_SIGN_IN_SUCCESS, POST_SIGN_IN_FAILED],
        params: payload,
        callback: callback
      };

      expect(JSON.stringify(userSignIn(payload, callback))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });

  describe('userRegister', () => {
    it('should return the correct type and the passed repos', () => {
      const payload = {
        foo: 'bar'
      };
      const callback = (response, error) => {};
      const expectedResult = {
        type: POST_REGISTER,
        rootUrl: `https://reqres.in`,
        endpoint: `/api/register`,
        noAuth: true,
        method: 'post',
        types: [POST_REGISTER, POST_REGISTER_SUCCESS, POST_REGISTER_FAILED],
        params: payload,
        callback: callback
      };

      expect(JSON.stringify(userRegister(payload, callback))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });

  describe('userSignOut', () => {
    it('should return the correct type Signout', () => {
      const payload = {
        foo: 'bar'
      };
      
      const expectedResult = {
        type: USER_SIGN_OUT,
        payload,
      };

      expect(JSON.stringify(userSignOut(payload))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });

  describe('userSignOutSuccess', () => {
    it('should return the correct type SignoutSuccess', () => {
      const payload = {
        foo: 'bar'
      };
      
      const expectedResult = {
        type: USER_SIGN_OUT_SUCCESS,
        payload,
      };

      expect(JSON.stringify(userSignOutSuccess(payload))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });

  describe('userSignOutFail', () => {
    it('should return the correct type SignoutFail', () => {
      const error = {
        foo: 'bar'
      };
      
      const expectedResult = {
        type: USER_SIGN_OUT_FAILED,
        error,
      };

      expect(JSON.stringify(userSignOutFail(error))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });

});
