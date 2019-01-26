import {GET_CHARACTER_SEARCH_API, GET_CHARACTER_SEARCH_API_SUCCESS, GET_CHARACTER_SEARCH_API_FAILED} from './constants'

export const getSearchCharacter = (payload, callBack) => {
  return {
    type: GET_CHARACTER_SEARCH_API,
    endpoint: `https://api.myjson.com/bins/1b1wio`,
    method: 'get',
    headers:{"X-Requested-with":""},
    types: [
      GET_CHARACTER_SEARCH_API, GET_CHARACTER_SEARCH_API_SUCCESS, GET_CHARACTER_SEARCH_API_FAILED
    ],
    params:payload

  }
};
