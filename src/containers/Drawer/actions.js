import {GET_CHARACTER_DETAIL, GET_CHARACTER_DETAIL_SUCCESS, GET_CHARACTER_DETAIL_FAILED} from './constants'

export const getCharacterDetail = (payload, callBack) => {
  return {
    type: GET_CHARACTER_DETAIL,
    endpoint: `https://api.myjson.com/bins/o72ls`,
    method: 'get',
    headers:{"X-Requested-with":""},
    types: [
      GET_CHARACTER_DETAIL, GET_CHARACTER_DETAIL_SUCCESS, GET_CHARACTER_DETAIL_FAILED
    ],
    params:payload

  }
};
