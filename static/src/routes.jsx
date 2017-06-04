import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import App from './containers/App/App.jsx';

/**
 *
 */
export default (
  <Route path="/" component={App}></Route>
);