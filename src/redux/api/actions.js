const actions = {
  GET_DATA_REQUEST: 'GET_DATA_REQUEST',
  GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
  GET_DATA_FAILED: 'GET_DATA_FAILED',

  registerRequest: payload => ({ type: actions.GET_DATA_REQUEST, payload }),
  registerSuccess: payload => ({ type: actions.GET_DATA_SUCCESS, payload }),
  registerFailed: payload => ({ type: actions.GET_DATA_FAILED, payload }),
};

export default actions;
