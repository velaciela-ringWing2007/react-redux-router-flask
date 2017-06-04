import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


/**
 *
 * @param initialState
 * @returns {null}
 */
export default function configureStore(initialState) {
  const store = createStore(
    initialState,
    applyMiddleware(thunkMiddleware)
  );

  return store;
}