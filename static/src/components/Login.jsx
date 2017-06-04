import React from 'react';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/auth.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


const style = {
  marginTop: 50,
  paddingBottom: 50,
  paddingTop: 25,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

/**
 *
 * @param state
 * @returns {{isAuthenticating: *, statusText: *}}
 */
function mapStateToProps(state) {
  return {
    isAuthenticating: state.auth.isAuthenticating,
    statusText: state.auth.statusText
  };
}


/**
 *
 * @param dispatch
 * @returns {A|B|M|N}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


/**
 * ログインView
 */
class LoginView extends React.Component {
  /**
   * constructor
   * @param props
   */
  constructor(props) {
    super(props);
    const redirectRoute = '/login';
    this.state = {
      email: '',
      password: '',
      email_error_text: '',
      password_error_text: '',
      redirectTo: redirectRoute,
      deisabled: true
    };
  }

  /**
   * 入力値に変化
   * @param e
   * @param type
   */
  changeValue(e, type) {
    const value = e.target.value;
    const next_state = {};
    next_state[type] = value;
    this.setState(next_state);
  }


  /**
   *
   * @param e
   */
  login(e) {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password, this.state.redirectTo);
  }


  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <Paper style={style}>
          <form role="form">
            <div className="text-center">
              <h2>Login</h2>
              {
                this.props.statusText &&
                  <div className="alert alert-info">
                    {this.props.statusText}
                  </div>
              }
            </div>

            <div className="col-md-12">
              <TextField
                hintText="Email"
                floatingLabelText="Email"
                type="email"
                errorText={this.state.email_error_text}
                onChange={(e) => this.changeValue(e, 'email')}
              />
            </div>

            <div className="col-md-12">
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                errorText={this.state.password_error_text}
                onChange={(e) => this.changeValue(e, 'password')}
              />
            </div>

            <RaisedButton
              disabled={false}
              style={{marginTop: 50}}
              label="Login"
              onClick={(e) => this.login(e)}
            />
          </form>
        </Paper>
      </div>
    );
  }
}


/**
 * propの設定
 * @type {{loginUser: shim, statusText: shim}}
 */
LoginView.propTypes = {
  loginUser: PropTypes.func,
  statusText: PropTypes.string
}


/**
 * @connect(mapState~, mapDisp~) -> babel6
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
