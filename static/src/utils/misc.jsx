/**
 * https://github.com/dternyak/React-Redux-Flask/blob/master/static/src/utils/misc.js
 */

/**
 *
 * @param constants
 * @returns {*}
 */
export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}


/**
 *
 * @param initialState
 * @param reducerMap
 * @returns {function(*=, *)}
 */
export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];


    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}


/**
 *
 * @param response
 */
export function parseJSON(response) {
  return response.data;
}


/**
 *
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}