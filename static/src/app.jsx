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
import { createHashHistory } from 'history';

import configureStore from './store/configureStore.jsx';
import routes from './routes.jsx';

const store = configureStore();
const history = syncHistoryWithStore(createHashHistory(), store, {query_support: true});

ReactDOM.render(
  <Provider store={store} >
    <Router history={history} >
      <div>
        {/*<Redirect from="/" to="/main"/>*/}
        {routes}
      </div>
    </Router>
  </Provider>
  , document.getElementById("app")
);