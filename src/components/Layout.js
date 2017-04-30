'use strict';

import React from 'react';
import {
  Link
} from 'react-router';

import Navbar             from './Navbar'
import Footer             from './Footer'
import SideBarProfileInfo from './SideBarProfileInfo';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Navbar />

        <div className="wrapper">
          <SideBarProfileInfo />
          <div className="main-wrapper">{this.props.children}</div>
        </div>

        <Footer />
      </div>
    );
  }
}
