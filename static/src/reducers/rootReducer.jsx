import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth.jsx';

/**
 *
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
  routing: routerReducer,
  auth
});

export default rootReducer;
