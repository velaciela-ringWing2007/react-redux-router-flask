import { createReducer } from '../utils/misc.jsx';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../constants/actionTypes.jsx';

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  isRegistering: false,
  isRegistered: false,
  registerStatusText: null,
};


/**
 *
 */
export default createReducer(initialState, {
  [LOGIN_USER_REQUEST]: (state) =>
    Object.assign({}, state, {
      isAuthenticating: true,
      statusText: null,
    }),
  [LOGIN_USER_SUCCESS]: (state, payload) =>
    Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: true,
      token: payload.token,
      userName: payload.token.email,
      statusText: 'You have been successfully logged in.',
    }),
  [LOGIN_USER_FAILURE]: (state, payload) =>
    Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: false,
      token: null,
      userName: null,
      statusText: `Authentication Error: ${payload.status} ${payload.statusText}`,
    }),
  [LOGOUT_USER]: (state) =>
    Object.assign({}, state, {
      isAuthenticated: false,
      token: null,
      userName: null,
      statusText: 'You have been successfully logged out.',
    }),
});