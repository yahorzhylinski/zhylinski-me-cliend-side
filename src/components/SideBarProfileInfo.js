'use strict';

import React from 'react';

export default class SideBarProfileInfo extends React.Component {

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="profile-container">
          <img className="profile" src="/img/avatar.png" alt="" />
          <h1 className="name">Yahor Zhylinski</h1>
          <h3 className="tagline">Full Stack Developer</h3>
        </div>

        <div className="contact-container container-block">
          <ul className="list-unstyled contact-list">
            <li className="email">
              <i className="fa fa-envelope"></i><a href="mailto:zhilinskyegor@gmail.com">zhilinskyegor@gmail.com</a>
            </li>
            <li className="phone">
              <i className="fa fa-phone"></i><a href="tel:+375336445510">+375(33) 644-55-10</a>
            </li>
            <li className="website"><i className="fa fa-globe"></i>
              <a href="http://yahor.zhylinski.me" target="_blank">yahor.zhylinski.me</a>
            </li>
            <li className="linkedin">
              <i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/zhilinskyegor/" target="_blank">zhilinskyegor</a>
            </li>
            <li className="github">
              <i className="fa fa-github"></i><a href="https://github.com/yahorzhylinski" target="_blank">yahorzhylinski</a>
            </li>
          </ul>
        </div>
        <div className="education-container container-block">
          <h2 className="container-block-title">Education</h2>
          <div className="item">
            <h4 className="degree">BSc in Applied Mathematics</h4>
            <h5 className="meta">Belarusian State University</h5>
            <div className="time">2011 - 2016</div>
          </div>
        </div>

        <div className="languages-container container-block">
          <h2 className="container-block-title">Languages</h2>
          <ul className="list-unstyled interests-list">
            <li>Russian <span className="lang-desc">(Native)</span></li>
            <li>English <span className="lang-desc">(Professional working proficiency)</span></li>
          </ul>
        </div>

        <div className="interests-container container-block">
          <h2 className="container-block-title">Interests</h2>
          <ul className="list-unstyled interests-list">
            <li><i className="fa fa-futbol-o"></i> Football</li>
            <li><i className="fa fa-power-off"></i> Arduino</li>
            <li><i className="fa fa-heart"></i> Wife</li>
          </ul>
        </div>
      </div>
    );
  }
}
