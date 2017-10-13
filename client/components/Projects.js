import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/*///
 COMPONENT
*////
const Projects = (props) => {

  const { imageData } = props;

  return (
    <div>
      <div className="container-fluid greenBackground">
        <div className="div-project-main-title">
          <img className="img-fluid" src="/assets/text/recentProjectsTitle.png" alt="Recent Projects: Apps | Games | Tech Talks" />
          <div className="div-img-cover" />
        </div>
        <div className="projects-main-container container-fluid">
          {
          imageData && imageData.length ? imageData.map(image => (
            <div key={image.name}>
              <div className="div-project-title">
                <img className="img-fluid" src={ image.titlePath } alt={ image.projectName } />
                <div className="div-img-cover" />
              </div>
              <div className="row">
                {/* <div className="col-lg-6 col-md-6 col-sm-12"> */}
                  <div
                    className={ `img-main-project ${image.name}` }
                    style={ { backgroundImage: `url( ${image.imagePath} )` } }
                  />
                {/* </div> */}
              </div>
              <div className="row project-text-row">
                {/* <div className="project-textbox-backdrop" > */}
                  <div className="project-textbox">
                    <div className="col-lg-7 col-md-7 col-sm-12">
                      {/* <div className="project-textbox"> */}
                      <ul className="description-column">
                        <li>
                          { image.description }
                        </li>
                        <li>
                          {
                            image.technologies ?
                              <span>Technologies used: <br />
                              { image.technologies.split(';').map((tech, i) => (
                                i === ( image.technologies.split(';').length - 1 ) ?
                                <span key={tech}><span>{ tech }</span><br /></span>
                                : <span key={tech}><span>{ tech };</span><br /></span>
                                ))
                              }
                              </span> : null
                          }
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                      <ul className="links-column">
                        <li className="links-title li-add-padding-bottom-10">
                          <span className="glyphicon glyphicon-link" aria-hidden="true" />
                          <span>&ensp; </span><span> Links:</span>
                        </li>
                        <li>
                          <div className="basic-div-links">
                            <table>
                              <tbody>
                                {
                                  image.linkProject ?
                                    <tr>
                                      <td>
                                        <p>Check It Out:</p>
                                      </td>
                                      <td className="highlight-blue">
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
                                      <td className="highlight-blue position-relative">
                                        <a href={image.linkDemo}>
                                          <img className="social-icon" src="/assets/social_icons/youtube.png" alt="YouTube presentation link" />
                                          <div className="div-img-cover" />
                                        </a>
                                      </td>
                                    </tr>
                                    : null
                                }
                                {
                                  image.linkGitHub ?
                                    <tr>
                                      <td>
                                        <p>See GitHub <br />Repository:</p>
                                      </td>
                                      <td className="highlight-blue position-relative">
                                        <a href={image.linkGitHub}>
                                          <img className="social-icon" src="/assets/social_icons/github.png" alt="GitHub project link" />
                                          <div className="div-img-cover" />
                                        </a>
                                      </td>
                                    </tr>
                                    : null
                                }
                              </tbody>
                            </table>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
          ))
          : <div className="div-container-image-under-construction">
              <img
                src="/assets/under_construction.gif"
                alt="Sorry, page is under construction."
              />
              <div className="div-img-cover" />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = (state) => ({
  imageData: state.imageStore.imagesList
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Projects);

/*///
 PROP TYPES
*////
Projects.propTypes = {
  imageData: PropTypes.array,
};
