'use strict';
import React from 'react';

export default class TextSectionBlock extends React.Component {

  render() {
    return (
      <div className="item">
        <h5 className="level-title">{this.props.label}</h5>
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
}
