import React from 'react';

/*///
 COMPONENT
*////
const Skills = (props) => {

  return (
    <div>
      <div className="blue-fixed-background">
        <div className="container-fluid">
          <div className="row">
            <div className="contact-main-title">
              <h1 className="heading-font">Skills</h1>
            </div>
          </div>
          <div className="row skills-lists">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3>
                <i className="fa fa-bolt" aria-hidden="true" />
                Front-End
              </h3>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>HTML</li>
                <li>CSS | SCSS | Flexbox</li>
                <li>React</li>
                <li>Redux</li>
                <li>D3</li>
                <li>jQuery</li>
                <li>AJAX | Axios.js</li>
                <li>WebSockets | Socket.io</li>
                <li>Paper.js | Phaser.js</li>
                <li>Bootstrap | Material-UI</li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3>
                <i className="fa fa-bolt" aria-hidden="true" />
                Back-End
              </h3>
              <ul className="ul-back-end">
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL | Sequelize</li>
                <li>SQL</li>
                <li>Cheerio.js</li>
                <li>Passport.js | OAuth</li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <h3>
                <i className="fa fa-bolt" aria-hidden="true" />
                Tools | Design | Other
              </h3>
              <ul>
                <li>Git | GitHub</li>
                <li>Chrome DevTools</li>
                <li>Command Line</li>
                <li>Mocha | Chai | Enzyme | Puppeteer</li>
                <li>Webpack</li>
                <li>Heroku</li>
                <li>Bluebird.js | Promises</li>
                <li>Agile | Test-Driven Development</li>
                <li>Photoshop</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
