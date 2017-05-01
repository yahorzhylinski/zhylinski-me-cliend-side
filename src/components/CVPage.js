'use strict';

import React            from 'react';
import SummaryBlock     from './CVComponents/SummaryBlock';
import WorkedForBlock   from './CVComponents/WorkedForBlock';
import ProjectsBlock    from './CVComponents/ProjectsBlock';

export default class CVPage extends React.Component {
  render() {
    return (
      <div className="cx-page">
        <SummaryBlock />
        <WorkedForBlock />
        <ProjectsBlock />
      </div>
    );
  }
}
