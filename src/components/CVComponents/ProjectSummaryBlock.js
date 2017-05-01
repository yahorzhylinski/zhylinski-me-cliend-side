'use strict';
import React            from 'react';

export default class ProjectsBlock extends React.Component {

  render() {
    return (
      <table className="table table-condensed">
        <tr>
          <th>Devs count</th>
          <th>Client</th>
          <th>My Role</th>
        </tr>
        <tr>
          <td>{this.props.devs_count}</td>
          <td>{this.props.client}</td>
          <td>{this.props.role}</td>
        </tr>
      </table>
    );
  }
}
