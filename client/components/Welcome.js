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
        <div className="div-welcome-main-title">
          <img className="img-fluid" src="/assets/abstractions/welcome_image.jpg" alt="Welcome" />
          <div className="div-img-cover" />
        </div>
        <div className="welcome-textbox">
          <ul>
            <li>You've found the portfolio website of</li>
            <li>Jasiu Leja, Software Developer & Artist</li>
            <li className="li-add-padding-bottom">working and living in NYC.</li>
            <li>Thanks for visiting!</li>
          </ul>
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
