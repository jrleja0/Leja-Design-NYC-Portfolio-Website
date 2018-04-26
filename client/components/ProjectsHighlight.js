import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Project} from './index';
import {handleImageOnLoad} from '../utilityFunctions';

/*///
 COMPONENT
*////
const ProjectsHighlight = (props) => {

  const { projectData } = props;

  return (
    <div>
      <div className="green-fixed-background">
        <div className="container-fluid">
          <div className="row">
            <div className="div-project-main-title">
              <h1 className="heading-font">Recent Work<br />
                <span className="subheading-font">Full Stack | Front End</span>
              </h1>
            </div>
          </div>
          <div className="projects-main-container container-fluid">
            {
            projectData && projectData.length ?
              projectData.map((proj, i) => (
                (i === 0 || i === 3) &&
                <div key={proj.name}>
                  <Project proj={proj} />
                </div>
              ))
            : <div className="div-container-image-under-construction">
                <img
                  src="/assets/under_construction.gif"
                  alt="Sorry, page is under construction."
                  onLoad={handleImageOnLoad}
                />
                <div className="div-img-cover" />
              </div>
            }
          </div>
          <div className="row project-text-row div-button-to-projects-page">
            <div className="button-home-to-projects-page">
              <div>
                <NavLink to="/work" activeClassName="active"
                  onClick={() => { window.scrollTo(0, 0); }}>
                  <h1>See More<br />Work</h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = (state) => ({
  projectData: state.imageStore.imagesList
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(ProjectsHighlight);

/*///
 PROP TYPES
*////
ProjectsHighlight.propTypes = {
  projectData: PropTypes.array,
};
