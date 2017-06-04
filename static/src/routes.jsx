import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import App from './containers/App/App.jsx';
import LoginView from './components/Login.jsx';


/**
 *
 */
export default (
  <Switch>
    <Route path="/" component={App} />
    <Route path="/login" component={LoginView}/>
  </Switch>
);