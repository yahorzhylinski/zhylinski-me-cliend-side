'use strict';
import React               from 'react';
import SectionBlock        from './SectionBlock';
import TextSectionBlock    from './TextSectionBlock';
import JobOverviewBlock    from './JobOverviewBlock';
import ProjectSummaryBlock from './ProjectSummaryBlock'
export default class ProjectsBlock extends React.Component {

  render() {
    return (
      <SectionBlock favicon="fa fa-archive" label="Projects">
          <JobOverviewBlock
            position="Monterosa LVIS Platform. Ruby On Rails Developer"
            company="BelItSoft. Minsk, Belarus"
            period="February 2017 - Present"
            tags={["Ruby", "Ruby On Rails 5", "EmberJS", "Amazon", "MySQL"]}>
            <p>
              Monterosa LViS is the cloud platform that powers live digital interactivity for the worlds biggest TV and sporting events
              Developing core of LVIS with Ruby On Rails 5 and EmberJS
            </p>
            <p>
              <a href="http://www.monterosa.co/">Monterosa</a> link.
            </p>
            <ProjectSummaryBlock
              client="Monterosa"
              devs_count="9"
              role="Ruby On Rails Developer, EmberJS Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="Flower Power Application. Ruby On Rails Developer"
            company="BelItSoft. Minsk, Belarus"
            period="June 2016 - February 2017"
            tags={["Ruby", "Ruby On Rails 4", "AngularJS", "Heroku", "Amazon", "PostgreSQL"]}>
            <p>
              Developed API for mobile applications to manage you plant, send notification to you phone about sunshine brightless, fertilizer, ... Also it can water you plant :)
              Developed of Web-application with Angular
            </p>
            <p>
              <a href="http://global.parrot.com/au/products/flower-power/">Flower Power</a> link.
            </p>
            <ProjectSummaryBlock
              client="Parrot"
              devs_count="3"
              role="Ruby On Rails Developer, AngularJS Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="Smart Collar. C++ Arduino Developer"
            company="ITRex. Minsk, Belarus"
            period="September 2015 – June 2016"
            tags={["C++", "Arduino", "BLE", "Wi-fi"]}>
            <p>
              A collar which connected to mobile app and ibeacons to track pet location and send notifications to mobile phone.
            </p>
            <ProjectSummaryBlock
              client="Start-up"
              devs_count="1"
              role="C++ Arduino Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="MacQuiz. Ruby On Rails + AngularJS Developer"
            company="Engine-it. Minsk, Belarus"
            period="March 2015 – July 2015"
            tags={["Ruby On Rails 4", "Capistrano", "Bootstrap", "AngularJS", "MySQL", "ActiveAdmin"]}>
            <p>
              This app provides you to win free food if you answer 30 questions correctly
              <img src="img/macquiz-preview.png" className="projects-images" />
            </p>
            <p>
              <a href="http://macquiz.i-will.ru">MacQuiz</a> link. but as i know it doesnt work properly now.
            </p>
            <ProjectSummaryBlock
              client="i-will"
              devs_count="3"
              role="Full-Stack Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="DigixGlobal. Ruby On Rails + AngularJS Developer"
            company="Engine-it. Minsk, Belarus"
            period="January 2015 – March 2015"
            tags={["Ruby On Rails 4", "Capistrano", "Bootstrap", "AngularJS", "MySQL", "ActiveAdmin", "Pundit", "CoffeScript"]}>
            <p>
              Digital Ownership Certificates are Ethereum smart contracts that provides a legally and cryptographically binding determination of ownership of physical gold or other assets currently under the guardianship of a participating custodian on the Digix decentralized platform. It also certifies the agreement between the user, the vendor, the custodian, and the independent auditor.
            </p>
            <p>
              <a href="https://dgx.io/">dgx.io</a> link.
            </p>
            <ProjectSummaryBlock
              client="dgx.io"
              devs_count="5"
              role="Ruby On Rails + AngularJS Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="TimeTracker. C# Mono Developer"
            company="Engine-it. Minsk, Belarus"
            period="September 2014 – November 2014"
            tags={["C#", "Mono", "Xamarin"]}>
            <p>
              TimeTracker tracks the working time for your team.
              It includes Server and Client sides.
              Server side is based on Ruby on Rails.Client - C# Mono
              There are Windows, Linux and Mac OS clients available.
            </p>
            <ProjectSummaryBlock
              client="Corporative project"
              devs_count="2"
              role="C# Mono Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="Bitcoin Nostradamus"
            company="Engine-it. Minsk, Belarus"
            period="July 2014 – February 2015"
            tags={["Ruby on Rails 4", "RailsAdmin", "Haml", "CSS(Bootstrap)", "CoffeScript", "Cryptocurrencies", "Python", "MySQL", "I18n", "Web Sockets", "Algorithms", "API"]}>
            <p>
              Bitcoin NostrAdamus is an analytical tool. It allows users to make short-, medium- and long-term forecasts on Bitcoin price fluctuation with high degree of accuracy by indicating whether the trend is going up or down in relation to the current price and by how much the price may change.
            </p>
            <p>
              <a href="https://nostradamus.coinsfriendly.com/">Nostradamus</a> link.
            </p>
            <ProjectSummaryBlock
              client="Start-up"
              devs_count="7"
              role="Ruby Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="Mexcoin Exchange"
            company="Engine-it. Minsk, Belarus"
            period="September 2013 - July 2014"
            tags={["RoR 4", "Coffescript", "jQuery", "Bootstrap", "HAML", "Coffescript", "Web Sockets", "LiteCoin", "Bitcoin", "Cron", "ActiveAdmin", "I18n"]}>
            <p>
              Mexcoin is cryptocurrency exchange which allows users to trade Bitcoins for US Dollars or vice versa. You can exchange your Bitcoin for US Dollarsor US Dollars for Bitcoin 24/7/365, it is fast, reliable, anonymous and safe.
            </p>
            <ProjectSummaryBlock
              client="Mexcoin"
              devs_count="3"
              role="Full-Stack Developer"
            />
          </JobOverviewBlock>

          <JobOverviewBlock
            position="An airport - Free time project"
            company="Engine-it. Minsk, Belarus"
            period="2012 - 2013"
            tags={["RoR 3", "WebSockets", "Queues", "JQuery", "Bootstrap"]}>
            <p>
              Mexcoin is cryptocurrency exchange which allows users to trade Bitcoins for US Dollars or vice versa. You can exchange your Bitcoin for US Dollarsor US Dollars for Bitcoin 24/7/365, it is fast, reliable, anonymous and safe.
            </p>
            <ProjectSummaryBlock
              client="-"
              devs_count="1"
              role="Full-Stack Developer"
            />
          </JobOverviewBlock>
        </SectionBlock>
    );
  }
}
