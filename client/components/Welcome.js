import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
const Welcome = (props) => {

  return (
    <div>
      <div className="container-fluid blueBackground">
        <div className="welcome-container left-right-margin-10">
          <div className="div-welcome-main-title">
            <img className="img-fluid" src="/assets/text/welcome.png" alt="Welcome" />
          </div>
          <div className="welcome-textbox">
            <p>
              You've found the portfolio website
              <br />
              of Jasiu Leja,
              <br />
              Software Developer & Artist working and living in NYC.
              <br />
              Thanks for visiting!
            </p>
          </div>
          <div className="welcome-img-background-bottom" />
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

export default connect(mapState)(Welcome);

/*///
 PROP TYPES
*////
Welcome.propTypes = {
};
