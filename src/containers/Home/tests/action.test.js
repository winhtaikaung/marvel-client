import {
  GET_CHARACTER_SEARCH_API, GET_CHARACTER_SEARCH_API_SUCCESS, GET_CHARACTER_SEARCH_API_FAILED
} from "../constants";
import md5 from 'md5'
import {
  
  getSearchCharacter
} from "../actions";
import { MARVEL_API_PUBLIC_KEY, MARVEL_API_PRIVATE_KEY } from "../../../utils/constants";

describe("Home Actions", () => {
  describe("getSearchCharacter", () => {
    it("should return the correct type", () => {
      const timeStamp = new Date().getTime().toString()
      const payload = {
        timeStamp:timeStamp
      };
            
      const expectedResult =  {
        type: GET_CHARACTER_SEARCH_API,
    endpoint: `https://gateway.marvel.com/v1/public/characters`,
    method: 'get',
    headers:{"X-Requested-with":""},
    types: [
      GET_CHARACTER_SEARCH_API, GET_CHARACTER_SEARCH_API_SUCCESS, GET_CHARACTER_SEARCH_API_FAILED
    ],
        params:{apikey:MARVEL_API_PUBLIC_KEY,ts:payload.timeStamp,hash:md5(`${payload.timeStamp}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`),...payload}
      }

      expect(JSON.stringify(getSearchCharacter(payload))).toEqual(
        JSON.stringify(expectedResult)
      );
    });
  });

});
