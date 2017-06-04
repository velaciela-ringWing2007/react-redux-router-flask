import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST
} from '../constants/actionTypes.jsx';
import { AUTH_TOKEN } from '../constants/const.jsx'

import { parseJSON } from '../utils/misc.jsx';
import { get_token, create_user } from '../utils/http_functions.jsx';


/**
 * ログイン成功時のaction
 * @param token
 * @returns {{type, payload: *, token: *}}
 */
export function loginUserSuccess(token) {
  localStorage.setItem(AUTH_TOKEN, token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload, token
  };
}


/**
 * ログイン失敗時のaction
 * @param error
 * @returns {{type, payload: {status: number, statusText: string}}}
 */
export function loginUserFailure(error) {
  localStorage.removeItem(AUTH_TOKEN);
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    },
  };
}


/**
 * ログインリクエスト発砲action
 * @returns {{type}}
 */
export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}


/**
 * ログアウトaction
 * @returns {{type}}
 */
export function logout() {
  localStorage.removeItem(AUTH_TOKEN);
  return {
    type: LOGOUT_USER
  }
}

/**
 * ログアウトしてログイン画面に遷移
 * @returns {function(*)}
 */
export function logoutAndRedirect() {
  return (dispach) => {
    dispach(logout);
  }
}


/**
 * ajaxでログイン処理を実行し，各actionを発砲する
 * @param email
 * @param password
 * @returns {Function}
 */
export function loginUser(email, password) {
  return function(dispatch) {
    dispatch(loginUserRequest());
    return get_token(email, password)
      .then(parseJSON)
      .then(response => {
        try {
          dispatch(loginUserSuccess(response.token));
        } catch (e) {
          alert(e);
          dispatch(loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token',
            },
          }));
        }
      })
      .catch(error => {
        dispatch(loginUserFailure({
          response: {
            status: 403,
            statusText: 'Invalid email or password',
          }
        }));
      })
  };
}