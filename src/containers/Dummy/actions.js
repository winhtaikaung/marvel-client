import {GET_DUMMY_API, GET_DUMMY_API_SUCCESS, GET_DUMMY_API_FAILED} from './constants'

export const getDummyData = (payload, callBack) => {
  return {
    type: GET_DUMMY_API,
    endpoint: `/api/get/9yB6u111RJTk`,
    method: 'get',
    types: [
      GET_DUMMY_API, GET_DUMMY_API_SUCCESS, GET_DUMMY_API_FAILED
    ],

  }
};
