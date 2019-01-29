import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectAuthUser
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {}
    const mockedState = {
      global: globalState,
    };
    console.log(selectGlobal)
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('selectCurrentUser', () => {
    it('should select the CurrentUser state', () => {
       const currentUserSelector = makeSelectCurrentUser()
      const user=true
      const mockedState = {
        global: {
            currentUser:user
          },
      };
      
      expect(currentUserSelector(mockedState)).toEqual(user);
    });
});

describe('selectAuthUser', () => {
    it('should select the AuthUser state', () => {
      const currentAuthSelector = makeSelectAuthUser()
      const user=true
      const mockedState = {
        global: {
            authUser:user
          },
      };
      
      expect(currentAuthSelector(mockedState)).toEqual(user);
    });
});

describe('selectLoading', () => {
    it('should select the loading state', () => {
      const currentAuthSelector = makeSelectLoading()
      const loading=true
      const mockedState = {
        global: {
            loading:loading
          },
      };
      
      expect(currentAuthSelector(mockedState)).toEqual(loading);
    });
});

describe('selectError', () => {
    it('should select the error state', () => {
      const currentErrorSelector = makeSelectError()
      const error={}
      const mockedState = {
        global: {
            error:error
          },
      };
      
      expect(currentErrorSelector(mockedState)).toEqual(error);
    });
});

