import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const imageData = [
    {
      name: 'smashbots1',
      path: 'assets/projects/smashbots/smashbots_intro.gif',
      category: 'project',
      projectName: 'Smash-Bots',
      description: 'Smash-Bots is a 2-D multiplayer online fighting game, loosely based off the game Super Smash Brothers, with an item store and robots.',
      technologies: 'JavaScript - Phaser, React, and Redux for the front end; Node, Express, and PostgreSQL/Sequelize for the backend; Socket.io for multiplayer functionality; HTML/CSS.',
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
      technologies: 'JavaScript - Paper.js, Socket.io, Node, Express; HTML/CSS',
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
      technologies: 'JavaScript - React, Redux, Node, Express, and PostgreSQL/Sequelize; HTML/CSS',
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
const Projects = (props) => {

  return (
    <div>
      <div className="container-fluid top-bottom-margin-30">
        <div className="left-right-margin-10">
          <img className="img-fluid" src="/assets/text/recentProjectsYellow.png" alt="Recent Projects" />
        </div>
        <div className="container-fluid">
          {
          imageData.map(image => (
            <div key={image.name}>
              <h3>{image.projectName}</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="img-main-project"
                    style={
                      image.name === 'diningWithTheStars1' ?
                        { background: `url( ${image.path} ) left top/cover no-repeat` }
                        : { background: `url( ${image.path} ) center top/cover no-repeat` }
                    }
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="project-textbox">
                    <ul>
                      <li className="li-add-padding-bottom">
                        { image.description }
                      </li>
                      <li className="li-add-padding-bottom">
                        {
                          image.technologies ?
                            <span>Technologies used: <br /> { image.technologies } </span> : null
                        }
                      </li>
                      <li> Links:</li>
                      <li>
                        <div className="basic-div-links">
                          <table>
                            {
                              image.linkProject ?
                                <tr>
                                  <td>
                                    <p>Check It Out:</p>
                                  </td>
                                  <td>
                                    <a href={image.linkProject} type="button" className="btn btn-default btn-lg" aria-label="Project Link">
                                      <span className="glyphicon glyphicon-link" aria-hidden="true" />
                                    </a>
                                  </td>
                                </tr>
                                : null
                            }
                            {
                              image.linkDemo ?
                                <tr>
                                  <td>
                                    <p>
                                      { image.name === 'techTalkPaperJS1' ?
                                        <span>Watch <br />Presentation:</span> : <span>Watch Demo <br />Presentation:</span>
                                      }
                                    </p>
                                  </td>
                                  <td>
                                    <a href={image.linkDemo}>
                                      <img className="social-icon" src="/assets/social_icons/youtube.png" alt="YouTube presentation link" />
                                    </a>
                                  </td>
                                </tr>
                                : null
                            }
                            {
                              image.linkGithub ?
                                <tr>
                                  <td>
                                    <p>See GitHub <br />Repository:</p>
                                  </td>
                                  <td>
                                    <a href={image.linkGithub}>
                                      <img className="social-icon" src="/assets/social_icons/github.png" alt="GitHub project link" />
                                    </a>
                                  </td>
                                </tr>
                                : null
                            }
                          </table>
                        </div>
                      </li>
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

export default connect(mapState)(Projects);

/*///
 PROP TYPES
*////
Projects.propTypes = {
};
