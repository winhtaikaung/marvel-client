import {userSignIn,
    userRegister, 
    userSignOut, 
    userSignOutSuccess, 
    userSignOutFail, userRegisterSuccess, userRegisterFailed} from '../actions'
import appReducer from '../reducer'
import {POST_REGISTER_FAILED, POST_REGISTER_SUCCESS} from '../constants';
describe('appReducer', () => {
    let state;
    beforeEach(() => {
      state ={
        loading: false,
        currentUser: localStorage.getItem("currentUser") || false,
        authUser: JSON.parse(localStorage.getItem("authUser"), {}) || {},
        register: null
      };
    });
  
    it('should return the initial state', () => {
      const expectedResult = state;
      expect(appReducer(undefined, {})).toEqual(expectedResult);
    });
  
    

    it('should handle the userRegister action correctly', () => {
        state.loading=true
        const expectedResult = state
        expect(appReducer(state, userRegister())).toEqual(expectedResult);
    });

    it('should handle the userRegisterSuccess action correctly', () => {
        state.loading=false
        const expectedResult = state
        expect(appReducer(state, {type:POST_REGISTER_SUCCESS})).toEqual(expectedResult);
    });

    it('should handle the userRegisterFailed action correctly', () => {
        state.loading=false
        state.error=undefined
        const expectedResult = state
        expect(appReducer(state, {type:POST_REGISTER_FAILED})).toEqual(expectedResult);
    });

    it('should handle the userSignIn action correctly', () => {
        state.loading=true
        const expectedResult = state
        expect(appReducer(state, userSignIn())).toEqual(expectedResult);
      });

      it('should handle the userSignInSuccess action correctly', () => {
        state.loading=false
        state.currentUser=true
        state.currentUser=undefined
        const expectedResult = state
        expect(appReducer(state,{type:POST_REGISTER_SUCCESS} )).toEqual(expectedResult);
      });

      it('should handle the userSignIn action correctly', () => {
        state.loading=true
        const expectedResult = state
        expect(appReducer(state, userSignIn())).toEqual(expectedResult);
      });

    it('should handle the userSignOut action correctly', () => {
        state.loading=true
        const expectedResult = state
        expect(appReducer(state, userSignOut())).toEqual(expectedResult);
    });

    it('should handle the userSignOutSuccess correctly', () => {
        state.loading=false
        state.currentUser=false
        state.authUser={}
        const expectedResult = state
        expect(appReducer(state, userSignOutSuccess())).toEqual(expectedResult);
    });
  
    
  });