import axios from 'axios';
import { put, select } from 'redux-saga/effects';
// import { getAuth, } from '../containers/CardDetailsPage/selectors';
// import { getAppAuth, } from '../containers/ForgotPasswordPage/selectors';
import _ from 'lodash';

const callApi = ({
  endpoint = undefined,
  method = undefined,
  params = undefined,
  headers = undefined,
  formdata = undefined,
} = {}) => {
  const root = `https://api.myjson.com`;
  const url = root + endpoint;

  let query = {
    method,
    url,
  };
  if (headers) query.headers = headers;

  const methods = ['put', 'post', 'patch'];
  query.method = method ? method : 'get';

  if (!_.isEmpty(params)) {
    if (methods.indexOf(method) === -1) {
      query.params = params;
    } else {
    //   let body = checkPayloadForFile(params, headers);
      query.data = params;
    }
  }
  if (!_.isEmpty(formdata)) {
    // let body = checkPayloadForFile(formdata, headers);
    query.data = formdata;
  }

  return axios(query)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
};

export function* commonSaga(action) {
  let headers = null;
  const {
    noAuth,
    types,
    notification,
    callback,
    instantAction,
    nextAction,
    endpoint

  } = action;
  if (noAuth) {
    // const authUser = yield select(getAppAuth);
    // headers = {
    //
    //   Authorization: `Bearer ${authUser.token}`,
    // };
  } else {
    // const authUser = yield select(getAuth);
    //
    // headers = {
    //
    //   Authorization: `Bearer ${authUser.token}`,
    // };
  }

  try {
    if(typeof endpoint !== 'string' ){
      throw new Error('Specify a string endpoint URL.');
    }
    if (!types) {
      throw new Error('Specify Action types');

    }

    if (!Array.isArray(types) && types.length !== 3) {
      throw new Error('action.types should have minimum 3 actions');
    }
    const duplicate = types.filter(
      (item, index, self) => self.indexOf(item) !== index,
    );
    if (duplicate.length !== 0) {
      throw new Error(`[${duplicate}] consists multiple time in action.types`);
    }

    if (notification) {
      if (Object.keys(notification).includes('loading')) {
        setTimeout(notification.loading(), 1000);
      }
    }
    const response = yield callApi({ ...action, headers: headers });
    //Raise an error if respose status code returns 500,400,
    if (
      ![
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        226,
        300,
        301,
        302,
        304,
        305,
        306,
        307,
        308,
      ].includes(response.status)
    ) {
      throw response;
    }
    yield put({ type: types[1], payload: response.data });
    //If There was a callback function you can use callBack
    if (action.notification) {
    if (Object.keys(action.notification).includes('success')) {
      setTimeout(action.notification.success(response.data),1000)
    }
    }
    if (callback) {
      action.callback(response.data);
    }

    // Instant Action is the intercepting callback method within action
    if (instantAction) {
      instantAction(response.data);
    }

    // NextAction is to trigger the next Action chain within saga
    if (nextAction) {
      yield put({ ...nextAction });
    }
  } catch (e) {

    yield put({ type: types[2], payload: e.data, error: e });
    if (action.notification) {
      if (Object.keys(action.notification).includes('error')) {
        if(e.status !== 403){
          setTimeout(action.notification.error(e.data),1000)
        }
      }
    }
    if (callback) {
      action.callback(undefined, e.data);
    }
  }
}
