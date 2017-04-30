'use strict';
import React from 'react';
import {
  Link
} from 'react-router';

export default class TextBlock extends React.Component {

  render() {
    return (
      <section className="section summary-section">
        <h2 className="section-title">
          <i className={this.props.favicon}></i>{this.props.label}
        </h2>
        {this.props.children}
      </section>
    );
  }
}
