'use strict';
import React            from 'react';
import SectionBlock     from './SectionBlock';
import TextSectionBlock from './TextSectionBlock';

export default class SummaryBlock extends React.Component {

  render() {
    return (
      <SectionBlock favicon="fa fa-user" label="Overview">
        <TextSectionBlock label="Summary">
          <ul>
            <li>4 years of experience in Software Development. At most i worked with Ruby On Rails</li>
            <li>Deep knowledge of software development and maintenance processes</li>
            <li>Bachelar degree in computer science</li>
            <li>Intermediate English communication skills (writing: regular e-mail correspondence; speaking: intermediate, regular calls with clients)</li>
          </ul>
        </TextSectionBlock>

        <TextSectionBlock label="Production experience in">
          <ul>
            <li>Ruby On Rails - 3,4,5</li>
            <li>JavaScript - AngularJS1, EmberJS(last 3 months), ReactJS(this website :))</li>
            <li>C# Mono</li>
            <li>C++(Bitcoin forks, Arduino)</li>
            <li>SQL - MySQL, PostgreSQL</li>
            <li>Nginx, Apache, Heroku, Amazon</li>
          </ul>
        </TextSectionBlock>
      </SectionBlock>
    );
  }
}
