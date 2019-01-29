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
  GET_CHARACTER_DETAIL,
  GET_CHARACTER_DETAIL_SUCCESS,
  GET_CHARACTER_DETAIL_FAILED
} from './constants';

import isEmpty from 'lodash/isEmpty'

import produce from 'immer'
// The initial state of the App
export const initialState = {
  data: [],
  error: null,
  meta: {},
  isloading: false
};

const detailReducer= (state = initialState, action)=> {
  return produce(state, draft => {
  switch (action.type) {
    case GET_CHARACTER_DETAIL:
      
        draft.isloading= true
        break;
    case GET_CHARACTER_DETAIL_SUCCESS:
     
        draft.data=!isEmpty(action.payload)?action.payload.data.results: []
        draft.meta={
          count:!isEmpty(action.payload)? action.payload.data.count:0,
          limit:!isEmpty(action.payload)? action.payload.data.limit:18,
          offset:!isEmpty(action.payload)? action.payload.data.offset:0,
          total: !isEmpty(action.payload)?action.payload.data.total:0
        }
        draft.isloading= false
      break;
    case GET_CHARACTER_DETAIL_FAILED:
        draft.error= !isEmpty(action.payload)?action.payload.error:{}
        draft.isloading=false
     break;
    default:
      return state;
  }
}) 
}

export default detailReducer;
