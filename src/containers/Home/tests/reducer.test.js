import {
  getSearchCharacter} from '../actions'
import appReducer from '../reducer'
import {GET_CHARACTER_SEARCH_API, GET_CHARACTER_SEARCH_API_SUCCESS, GET_CHARACTER_SEARCH_API_FAILED} from '../constants';
describe('drawerReducer', () => {
    let state;
    beforeEach(() => {
      state ={
        data: [],
        error: null,
        meta: {},
        loading: false
      };
    });
  
    it('should return the initial state', () => {
      const expectedResult = state;
      expect(appReducer(undefined, {})).toEqual(expectedResult);
    });
  
    

    it('should handle the Search character action correctly', () => {
        state.loading=true
        const expectedResult = state
        const payload = {
          id:'3'
        }
        expect(appReducer(state, getSearchCharacter(payload))).toEqual(expectedResult);
    });

    it('should handle the Search character Success action correctly', () => {
      
        state.loading=false
        state.data=[]
        state.error=null
        state.meta={
          count:0,
          limit:18,
          offset:0,
          total:0
        }
        
        const expectedResult = state
        expect(appReducer(state, {type:GET_CHARACTER_SEARCH_API_SUCCESS})).toEqual(expectedResult);
    });

    it('should handle the Search character Failed action correctly', () => {

      state.loading=false
      state.error={}
      const expectedResult = state
      expect(appReducer(state, {type:GET_CHARACTER_SEARCH_API_FAILED})).toEqual(expectedResult);
    });

  });