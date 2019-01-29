import {GET_CHARACTER_DETAIL, GET_CHARACTER_DETAIL_SUCCESS, GET_CHARACTER_DETAIL_FAILED} from './constants'
import {MARVEL_API_PUBLIC_KEY,MARVEL_API_PRIVATE_KEY} from '../../utils/constants';
import md5 from 'md5'

export const getCharacterDetail = (payload, callBack) => {
  const timeStamp = new Date().getTime().toString()
  return {
    type: GET_CHARACTER_DETAIL,
    endpoint: `https://gateway.marvel.com/v1/public/characters/${payload.id}`,
    method: 'get',
    headers:{'X-Requested-with':''},
    types: [
      GET_CHARACTER_DETAIL, GET_CHARACTER_DETAIL_SUCCESS, GET_CHARACTER_DETAIL_FAILED
    ],
    params:{apikey:MARVEL_API_PUBLIC_KEY,ts:(payload.timeStamp)?payload.timeStamp:timeStamp,hash:md5(`${(payload.timeStamp)?payload.timeStamp:timeStamp}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`),...payload}

  }
};
