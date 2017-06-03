import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history';

import configureStore from './store/configureStore.jsx';
import routes from './routes.jsx';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store} >
    <Router history={history} >
      <Redirect from="/" to="/main"/>
      {routes}
    </Router>
  </Provider>
);