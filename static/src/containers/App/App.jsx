import React from 'react';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';


/**
 *
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>

        <div>
          {this.props.children}
        </div>

        <div>
          <Footer/>
        </div>
      </div>

    )
  }
}