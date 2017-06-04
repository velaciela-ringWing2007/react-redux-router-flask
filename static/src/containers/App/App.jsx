import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';


/**
 *
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <section>
          <div>
            <div>
              <Header/>
            </div>

            <div
              className="container"
              style={{ marginTop: 10, paddingBottom: 250 }}
            >
              {this.props.children}
            </div>

            <div>
              <Footer/>
            </div>
          </div>
        </section>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App;