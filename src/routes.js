'use strict';

import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'

import Layout        from './components/Layout';
import CVPage        from './components/CVPage';
import AboutMePage   from './components/AboutMePage';
import AboutSitePage from './components/AboutSitePage';
import NotFoundPage  from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute              component={CVPage}        />
    <Route path="about-me"   component={AboutMePage}   />
    <Route path="about-site" component={AboutSitePage} />
    <Route path="*"          component={NotFoundPage}  />
  </Route>
);

export default routes;
