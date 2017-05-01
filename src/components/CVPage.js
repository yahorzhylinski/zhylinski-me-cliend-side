'use strict';

import React            from 'react';
import SummaryBlock     from './CVComponents/SummaryBlock';
import WorkedForBlock   from './CVComponents/WorkedForBlock';
import ProjectsBlock    from './CVComponents/ProjectsBlock';

export default class CVPage extends React.Component {
  render() {
    return (
      <div className="cx-page">

        <div className="text-right">
          <a className="btn btn-success" target="_blank" href="docs/pdf_version.pdf">Download PDF Version</a>
        </div>

        <SummaryBlock />
        <WorkedForBlock />
        <ProjectsBlock />
      </div>
    );
  }
}
