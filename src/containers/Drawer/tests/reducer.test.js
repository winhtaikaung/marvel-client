import {
  getCharacterDetail} from '../actions'
import appReducer from '../reducer'
import {POST_REGISTER_FAILED, POST_REGISTER_SUCCESS, GET_CHARACTER_DETAIL_SUCCESS, GET_CHARACTER_DETAIL_FAILED} from '../constants';
describe('drawerReducer', () => {
    let state;
    beforeEach(() => {
      state ={
        data: [],
        error: null,
        meta: {},
        isloading: false
      };
    });
  
    it('should return the initial state', () => {
      const expectedResult = state;
      expect(appReducer(undefined, {})).toEqual(expectedResult);
    });
  
    

    it('should handle the userRegister action correctly', () => {
        state.isloading=true
        const expectedResult = state
        const payload = {
          id:"3"
        }
        expect(appReducer(state, getCharacterDetail(payload))).toEqual(expectedResult);
    });

    it('should handle the userRegisterSuccess action correctly', () => {
      
        state.isloading=false
        state.data=[]
        state.error=null
        state.meta={
          count:0,
          limit:18,
          offset:0,
          total:0
        }
        
        const expectedResult = state
        expect(appReducer(state, {type:GET_CHARACTER_DETAIL_SUCCESS,id:"3"})).toEqual(expectedResult);
    });

    it('should handle the userRegisterFailed action correctly', () => {

      state.isloading=false
      state.error={}
      const expectedResult = state
      expect(appReducer(state, {type:GET_CHARACTER_DETAIL_FAILED,id:"3"})).toEqual(expectedResult);
    });

  });