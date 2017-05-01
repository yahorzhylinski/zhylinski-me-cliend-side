'use strict';
import React            from 'react';
import SectionBlock     from './SectionBlock';
import TextSectionBlock from './TextSectionBlock';
import JobOverviewBlock from './JobOverviewBlock';

export default class WorkedForBlock extends React.Component {

  render() {
    return (
      <SectionBlock favicon="fa fa-briefcase" label="Worked for">
          <JobOverviewBlock
            position="Ruby On Rails Developer"
            company="BelItSoft. Minsk, Belarus"
            period="June 2016 - Present"
            tags={["Ruby", "Ruby On Rails 5", "AngularJS", "EmberJS", "Heroku", "Amazon", "MySQL", "PostgreSQL"]}>
            I decided to return to work with Ruby On Rails. BelItSoft is company that provides dedicates teams. 9 months I worked for <a className="underline-link" href="http://global.parrot.com/au/products/flower-power/">Parrot Flower Power</a> project.
            At the current moment i work for work for <a className="underline-link" href="http://global.parrot.com/au/products/flower-power/">Monterosa</a>.
            Both projects are work/ed as a Ruby On Rails Developer.
          </JobOverviewBlock>

          <JobOverviewBlock
            position="Software Developer - R&D Department"
            company="ITRex. Minsk, Belarus"
            period="September 2015 - June 2016"
            tags={["Arduino", "C++", "BLE", "C#", "MVC .Net", "AngularJS", "Jquery", "Cordoba"]}>
            After i came from USA i got an offer to work on Arduino C++ project to develop a smart collar for pets. I worked on an arduino sketch. This collar helps people to track pets location with a mobile phone. This collar also disallow pets to go out from permitted location. I also have worled on .Net project. but it was too small.
          </JobOverviewBlock>

          <JobOverviewBlock
            position="Landscaper :)"
            company="Ocean Edge. Cape Cod, USA"
            period="June 2015 - September 2015"
            tags={["Relax :)", "English", "Cordoba", "Mobile apps with JS"]}>
            I decided to go to the USA to relax, improve English and get USA culture :). At free time read books and tried to develop mobile apps with Ionic and Cordoba on JS. Also for my superviser implemented a web-app.
          </JobOverviewBlock>

          <JobOverviewBlock
            position="Ruby On Rails Developer"
            company="Engine-it. Minsk, Belarus"
            period="September 2013 - June 2015"
            tags={["Ruby", "Ruby On Rails 3-4", "Apache", "Nginx", "MySQL", "PostgreSQL", "Redis", "Jquery", "AngularJS", "Cryptocurrency", "C# Mono", "C++ Bitcon"]}>
            First Company where i worked :) Mostly developed Blockchain based applications: Blockchain explorers, Cryptocurrencies exchanges. Have got very big experience in parsing of blockchain. Last 6 months worked on small RoR projects for Axe and Russian McDonalds. Implemented some kind of TimeTracking system like ODesk.
          </JobOverviewBlock>
      </SectionBlock>
    );
  }
}
