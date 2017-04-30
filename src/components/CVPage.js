'use strict';

import React from 'react';
import TextBlock from './common/TextBlock';

export default class CVPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
        <TextBlock favicon="fa fa-user" label="Overview">
          <div className="item">
            <p>
              4 years of experience in Software Development. At most i worked with Ruby On Rails
            </p>
          </div>

          <div className="item">
            <p>
              Production experience in: RoR(3,4), JavaScript, C# Mono, C++(Bitcoin forks, Arduino), Java, SQL (details in “professional skills” section)
            </p>
          </div>

          <div className="item">
            <p>
              Deep knowledge of software development and maintenance processes
            </p>
          </div>

          <div className="item">
            <p>
              Intermediate English communication skills (writing: regular e-mail correspondence; speaking: intermediate, regular calls with clients)
            </p>
          </div>

          <div className="item">
            <p>
              Current location: Minsk, Belarus
            </p>
          </div>

        </TextBlock>

        <section className="section experiences-section">
            <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Lead Developer</h3>
                        <div className="time">2015 - Present</div>
                    </div>
                    <div className="company">Startup Hubs, San Francisco</div>
                </div>
                <div className="details">
                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">Senior Software Engineer</h3>
                        <div className="time">2014 - 2015</div>
                    </div>
                    <div className="company">Google, London</div>
                </div>
                <div className="details">
                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                </div>
            </div>

            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">UI Developer</h3>
                        <div className="time">2012 - 2014</div>
                    </div>
                    <div className="company">Amazon, London</div>
                </div>
                <div className="details">
                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                </div>
            </div>

        </section>

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
      </div>
    );
  }
}
