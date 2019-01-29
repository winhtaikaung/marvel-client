/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  GET_CHARACTER_SEARCH_API,
  GET_CHARACTER_SEARCH_API_SUCCESS,
  GET_CHARACTER_SEARCH_API_FAILED
} from "./constants";
import produce from "immer";
import isEmpty from 'lodash/isEmpty'
// The initial state of the App
export const initialState = {
  data: [],
  error: null,
  meta: {},
  loading: false
};

const dummyReducer = (state = initialState, action) => {
  return produce(state, draft => {
    
    switch (action.type) {
      case GET_CHARACTER_SEARCH_API:
        draft.loading = true;
        break;
      case GET_CHARACTER_SEARCH_API_SUCCESS:
        draft.loading = false;
        draft.data=!isEmpty(action.payload)?action.payload.data.results: []
        draft.meta={
          count:!isEmpty(action.payload)? action.payload.data.count:0,
          limit:!isEmpty(action.payload)? action.payload.data.limit:18,
          offset:!isEmpty(action.payload)? action.payload.data.offset:0,
          total: !isEmpty(action.payload)?action.payload.data.total:0
        }
        break;
      case GET_CHARACTER_SEARCH_API_FAILED:
        draft.error= !isEmpty(action.payload)?action.payload.error:{}
        draft.loading = false;
        break;
      default:
        return state
        
    }
  });
};

export default dummyReducer;
