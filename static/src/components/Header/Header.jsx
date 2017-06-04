import React from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/auth.jsx';
import { connect } from 'react-redux';


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
 *
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Header</h1>
        <Button/>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);