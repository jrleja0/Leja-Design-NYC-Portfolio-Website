import React from 'react';
import {Spinner} from './index';
import {handleImageOnLoad} from '../utilityFunctions';

/*///
 COMPONENT
*////
const Project = (props) => {

  const { proj } = props;

  return (
    <div>
      {/* <div className="div-project-title">
        <img src={ proj.titlePath } alt={ proj.projectTitle }
          onLoad={handleImageOnLoad} />
        <div className="div-img-cover" />
      </div> */}
      <div className="row">
        <div className="div-project-heading">
          <h1 className="project-heading-font">
            { proj.projectHeading && proj.projectHeading.map(heading => (
              <span key={heading}>{heading}<br /></span>
            ))}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="img-project-main">
          <Spinner />
          <img src={ proj.imagePath } alt={`image of ${proj.projectTitle}`}
            onLoad={handleImageOnLoad} />
          <div className="div-img-cover" />
        </div>
      </div>
      <div className="row project-text-row">
        <div className="project-textbox">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <ul className="description-column">
              <li>
                { proj.description }
              </li>
              <li>
                {
                  proj.technologies ?
                    <span>Technologies used: <br />
                    { proj.technologies.split(';').map((tech, i) => (
                      i === ( proj.technologies.split(';').length - 1 ) ?
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
                <i className="fa fa-link" aria-hidden="true" />
                <span>&ensp; </span><span> Links:</span>
              </li>
              <li>
                <div className="basic-div-links">
                  <table>
                    <tbody>
                      {
                        proj.linkProject ?
                          <tr>
                            <td>
                              <p>Check It Out:</p>
                            </td>
                            <td>
                              <a className="a-td-button" href={proj.linkProject} type="button" aria-label="Project Link">
                                <i className="fa fa-link link-icon" aria-hidden="true" />
                              </a>
                            </td>
                          </tr>
                          : null
                      }
                      {
                        proj.linkDemo ?
                          <tr>
                            <td>
                              <p>
                                { proj.name === 'techTalkPaperJS1' ?
                                  <span>Watch <br />Presentation:</span> : <span>Watch Demo <br />Presentation:</span>
                                }
                              </p>
                            </td>
                            <td>
                              <a className="a-td-button" href={proj.linkDemo} type="button" aria-label="YouTube Presentation Link">
                                <i className="fa fa-youtube-play social-icon" aria-hidden="true" />
                              </a>
                            </td>
                          </tr>
                          : null
                      }
                      {
                        proj.linkGitHub ?
                          <tr>
                            <td>
                              <p>See GitHub <br />Repository:</p>
                            </td>
                            <td>
                              <a className="a-td-button" href={proj.linkGitHub} type="button" aria-label="GitHub Project Link">
                                <i className="fa fa-github social-icon" aria-hidden="true" />
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
    </div>
  );
};

export default Project;
