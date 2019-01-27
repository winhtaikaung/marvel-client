import {GET_CHARACTER_SEARCH_API, GET_CHARACTER_SEARCH_API_SUCCESS, GET_CHARACTER_SEARCH_API_FAILED} from './constants'
import {MARVEL_API_PUBLIC_KEY,MARVEL_API_PRIVATE_KEY} from '../../utils/constants';
import md5 from 'md5'

export const getSearchCharacter = (payload, callBack) => {
  const timeStamp = new Date().getTime().toString()
  return {
    type: GET_CHARACTER_SEARCH_API,
    endpoint: `https://gateway.marvel.com/v1/public/characters`,
    method: 'get',
    headers:{"X-Requested-with":""},
    types: [
      GET_CHARACTER_SEARCH_API, GET_CHARACTER_SEARCH_API_SUCCESS, GET_CHARACTER_SEARCH_API_FAILED
    ],
    params:{apikey:MARVEL_API_PUBLIC_KEY,ts:timeStamp,hash:md5(`${timeStamp}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`),...payload},
    callBack:callBack

  }
};
