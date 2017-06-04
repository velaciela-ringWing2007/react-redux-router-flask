import axios from 'axios';

const tokenConfig = (token) => ({
  headers: {
    'Authorization': token, // eslint-disable-line quote-props
  },
});


/**
 *
 * @param token
 * @returns {AxiosPromise}
 */
export function validate_token(token) {
  return axios.post('/api/is_token_valid', {
    token,
  });
}


/**
 *
 */
export function get_github_access() {
  window.open(
    '/github-login',
    '_blank' // <- This is what makes it open in a new window.
  );
}


/**
 *
 * @param email
 * @param password
 * @returns {AxiosPromise}
 */
export function create_user(email, password) {
  return axios.post('api/create_user', {
    email,
    password,
  });
}


/**
 *
 * @param email
 * @param password
 * @returns {AxiosPromise}
 */
export function get_token(email, password) {
  return axios.post('api/get_token', {
    email,
    password,
  });
}


/**
 *
 * @param token
 * @returns {AxiosPromise}
 */
export function has_github_token(token) {
  return axios.get('api/has_github_token', tokenConfig(token));
}


/**
 *
 * @param token
 * @returns {AxiosPromise}
 */
export function data_about_user(token) {
  return axios.get('api/user', tokenConfig(token));
}