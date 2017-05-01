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

        <TextSectionBlock label="My interesting github repositories">
          <ul>
            <li><a href="https://github.com/yahorzhylinski/parrot-binary-decoder">parrot-binary-decoder</a> - test task for Parrot - Ruby on Rails</li>
            <li><a href="https://github.com/yahorzhylinski/plateau_and_rovers">plateau_and_rovers</a> - test task for Catawiki(Holland). After i signed a contract with them but for some reasons Migration Department declined my relocate :(</li>
            <li><a href="https://github.com/yahorzhylinski/pdf-generator">pdf-generator</a> - test task for Oxagile - Ruby On Rails + Angular</li>
            <li><a href="https://github.com/yahorzhylinski/base-two-reverser">base-two-reverser</a> - test task for ITRex</li>
            <li><a href="https://github.com/yahorzhylinski/Greedy-algorithm-Java">Greedy-algorithm-Java</a></li>
            <li><a href="https://github.com/yahorzhylinski/image-magick-handler">image-magick-handler</a> - image-magick with build pattern - ruby</li>
          </ul>
        </TextSectionBlock>

      </SectionBlock>
    );
  }
}
