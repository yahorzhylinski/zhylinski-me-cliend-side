'use strict';
import React from 'react';
import {
  Link
} from 'react-router';

export default class Navbar extends React.Component {

  closeNavbar(event) {
    // if bar is open
    if($('.navbar-collapse.collapse.in').length > 0) {
      $('.navbar-toggle').click()
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link onClick={this.closeNavbar} className="navbar-brand" to="/">
              <img src="img/sign.png" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link onClick={this.closeNavbar} to="/">CV</Link></li>
              <li><Link onClick={this.closeNavbar} to="/about-me">About Me</Link></li>
              <li><Link onClick={this.closeNavbar} to="/about-site">About Website</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">TODO <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
