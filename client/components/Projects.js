import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const imageData = [
    {
      name: 'smashbots1',
      path: 'assets/projects/smashbots/smashbots_intro.gif',
      category: 'project',
      projectName: 'Smash-Bots',
      description: 'Smash-Bots is a 2-D multiplayer online fighting game loosely based off the game Super Smash Brothers. Technologies used are: Phaser, React, and Redux for the front end; Node, Express, and PostgreSQL for the backend; Socket.io for multiplayer functionality.',
      linkProject: 'https://smashbots.herokuapp.com',
      linkDemo: 'https://www.youtube.com/watch?v=903YYFBc9V8',
      linkGithub: 'https://github.com/mikevg466/Smash-Bots',
    },
    {
      name: 'colorChaos1',
      path: 'assets/projects/color_chaos/game2.jpg',
      category: 'project',
      projectName: '"Catching Matching Color Chaos!" Game',
      description: '"Catching Matching Color Chaos!" is a fast-paced color matching multiplayer game that I created as a solo hackathon project in 4 days.',
      linkProject: 'TBA',
      linkDemo: 'https://www.youtube.com/watch?v=EYTeEmcarnY',
      linkGithub: 'https://github.com/jrleja0/Color-Chaos-Hackathon-Paper.JS-Game',
    },
    {
      name: 'diningWithTheStars1',
      path: 'assets/projects/dining_with_the_stars/screenshot_zoolander.jpg',
      category: 'project',
      projectName: 'Dining with the Stars Ecommerce Site',
      description: 'Dining with the Stars is a prototype ecommerce site for a trendy business that sells dining experiences with famous celebrities.',
      linkProject: 'https://doa-grace-shopper.herokuapp.com',
      linkGithub: 'https://github.com/CandiceBousquet/GraceShopper',
    },
    {
      name: 'techTalkPaperJS1',
      path: 'assets/projects/tech_talk_paperjs/tech_talk_paperjs.jpg',
      category: 'project',
      projectName: '"Intro to Paper.js" Tech Talk',
      description: 'In this "Intro to Paper.js" tech talk, learn the basics of Paper.js, the vector graphics library, including items, their hierarchy, and event handlers, for creating engaging animations.',
      linkDemo: 'https://www.youtube.com/watch?v=HYFUitjFQT0',
      linkGithub: 'https://github.com/jrleja0/paper.js-Project-1',
    }
  ];

/*///
 COMPONENT
*////
const HomeBody = (props) => {

  return (
    <div>
      <div className="container-fluid">
        <div>
          <img className="img-fluid" src="/assets/text/recentProjectsYellow.png" alt="Recent Projects" />
        </div>
        <div className="container-fluid">
          {
          imageData.map(image => (
            <div key={image.name}>
              <h3>{image.projectName}</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="img-main-project" style={
                    { background: `url( ${image.path} ) center top/cover no-repeat` }
                  } />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="project-textbox">
                    <ul>
                      <li className="li-extra-padding-bottom">
                        { image.description }
                      </li>
                      <br />
                      <li><span> Links:</span></li>
                      <div className="div-socialMediaLinks">
                        <li>
                          <div>
                          {
                            image.linkProject ?
                              <p> Check it out: <a className="glyphicon glyphicon-link" href={image.linkProject} /></p>
                              : null
                          }
                          </div>
                        </li>
                        <li>
                          <div>
                          {
                            image.linkDemo ?
                              <p>
                                { image.name === 'techTalkPaperJS1' ?
                                  'Presentation: ' : 'Demo Presentation '
                                }
                                <a href={image.linkDemo}>
                                  <img className="social-icon" src="/assets/social_icons/youtube.png" alt="YouTube presentation link" />
                                </a>
                              </p>
                              : null
                          }
                          </div>
                        </li>
                        <li>
                          <div>
                          {
                            image.linkGithub ?
                              <p> GitHub Repository:
                                <a href={image.linkGithub}>
                                  <img className="social-icon" src="/assets/social_icons/github.png" alt="GitHub project link" />
                                </a>
                              </p>
                              : null
                          }
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = (state) => {
  return {
  };
};

export default connect(mapState)(HomeBody);

/*///
 PROP TYPES
*////
HomeBody.propTypes = {
};
