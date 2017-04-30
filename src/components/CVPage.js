'use strict';

import React            from 'react';
import SectionBlock     from './CVComponents/SectionBlock';
import TextSectionBlock from './CVComponents/TextSectionBlock';
import JobOverviewBlock from './CVComponents/JobOverviewBlock';

export default class CVPage extends React.Component {
  render() {
    return (
      <div className="cx-page">
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

        <SectionBlock favicon="fa fa-briefcase" label="Worked for">
            <JobOverviewBlock
              position="Ruby On Rails Developer"
              company="BelItSoft. Minsk, Belarus"
              period="June 2016 - Present"
              tags={["Ruby", "Ruby On Rails 5", "AngularJS", "EmberJS", "Heroku", "Amazon", "MySQL", "PostgreSQL"]}>
              I decided to return to work with Ruby On Rails. 9 months Worked for <a className="underline-link" href="http://global.parrot.com/au/products/flower-power/">Parrot Flower Power</a> project. An incredible sensor that assesses your plants needs. Currently work for <a className="underline-link" href="http://global.parrot.com/au/products/flower-power/">Monterosa</a>. Monterosa provides technology and ideas that shape the future of fan interaction across entertainment and sport.
            </JobOverviewBlock>

            <JobOverviewBlock
              position="Software Developer - R&D Department"
              company="ITRex. Minsk, Belarus"
              period="September 2015 - June 2016"
              tags={["Arduino", "C++", "BLE", "C#", "MVC .Net", "AngularJS", "Jquery", "Cordoba"]}>
              After i came from USA i got an offer to work on Arduino C++ project to develope a smart colar for pets. I worked on an arduino sketch. It the colar which users can manage t TODO
            </JobOverviewBlock>

            <JobOverviewBlock
              position="Landscaper :)"
              company="Ocean Edge. Cape Cod, USA"
              period="June 2015 - September 2015"
              tags={["Relax :)", "English", "Cordoba", "Mobile apps with JS"]}>
              I decided to go to the USA to relax, improve English and get USA culture :). In free time read books and tried mobile apps with Ionic and Cordoba on JS.
            </JobOverviewBlock>

            <JobOverviewBlock
              position="Ruby On Rails Developer"
              company="Engine-it. Minsk, Belarus"
              period="September 2013 - June 2015"
              tags={["Ruby", "Ruby On Rails 3-4", "Apache", "Nginx", "MySQL", "PostgreSQL", "Redis", "Jquery", "AngularJS", "Cryptocurrency", "C# Mono", "C++ Bitcon"]}>
              First Company where i worked :) Mostly developed Blockchain based applications: Blockchain explorers, Cryptocurrencies exchanges. Have got very big experience in parsing of blockchain. Last 6 monthes worked on small RoR projects for Axe and Russian McDonalds. Implemented some kind of TimeTracking system like ODesk.
            </JobOverviewBlock>
        </SectionBlock>


        <section className="section projects-section">
            <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
            <div className="intro">
                <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
            </div>
            <div className="item">
                <span className="project-title"><a href="#hook">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

            </div>
            <div className="item">
                <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> -
                <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
            </div>
            <div className="item">
                <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" target="_blank">Tempo</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
            </div>
            <div className="item">
                <span className="project-title"><a href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" target="_blank">Atom</a></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
            </div>
            <div className="item">
                <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta</a></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
            </div>
        </section>

        <section className="skills-section section">
            <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
            <div className="skillset">
                <div className="item">
                    <h3 className="level-title">Python &amp; Django</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="98%">
                        </div>
                    </div>
                </div>

                <div className="item">
                    <h3 className="level-title">Javascript &amp; jQuery</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="98%">
                        </div>
                    </div>
                </div>

                <div className="item">
                    <h3 className="level-title">Angular</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="98%">
                        </div>
                    </div>
                </div>

                <div className="item">
                    <h3 className="level-title">HTML5 &amp; CSS</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="95%">
                        </div>
                    </div>
                </div>

                <div className="item">
                    <h3 className="level-title">Ruby on Rails</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="85%">
                        </div>
                    </div>
                </div>

                <div className="item">
                    <h3 className="level-title">Sketch &amp; Photoshop</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="60%">
                        </div>
                    </div>
                </div>

            </div>
        </section>
      </div>
    );
  }
}
