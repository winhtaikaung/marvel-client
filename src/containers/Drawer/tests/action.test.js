import {
  GET_CHARACTER_DETAIL, GET_CHARACTER_DETAIL_SUCCESS, GET_CHARACTER_DETAIL_FAILED
} from '../constants';
import md5 from 'md5'
import {
  getCharacterDetail
} from '../actions';
import { MARVEL_API_PUBLIC_KEY, MARVEL_API_PRIVATE_KEY } from '../../../utils/constants';

describe('Drawer Actions', () => {
  describe('getCharacterDetail', () => {
    it('should return the correct type', () => {
      const timeStamp = new Date().getTime().toString()
      const payload = {
        id: 'id',
        timeStamp:timeStamp
      };
            
      const expectedResult =  {
        type: GET_CHARACTER_DETAIL,
        endpoint: `https://gateway.marvel.com/v1/public/characters/${payload.id}`,
        method: 'get',
        noAuth:false,
        headers:{'X-Requested-with':''},
        types: [
          GET_CHARACTER_DETAIL, GET_CHARACTER_DETAIL_SUCCESS, GET_CHARACTER_DETAIL_FAILED
        ],
        params:{apikey:MARVEL_API_PUBLIC_KEY,ts:payload.timeStamp,hash:md5(`${payload.timeStamp}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`),...payload}
      }

      expect(JSON.stringify(getCharacterDetail(payload))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });

});
