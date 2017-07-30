import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/*///
 COMPONENT
*////
const Contact = (props) => {

  return (
    <div>
      <div className="container-fluid redBackground">
        <div>
          <img className="img-fluid" src="/assets/text/contactMeAndConnectBlue.png" alt="Contact Me And Connect" />
        </div>
        <div className="container-fluid">
          <div className="row top-bottom-margin-30">
            <div className="headshotBackground col-lg-6 col-md-6 col-sm-12" />
            <div className="contact-textbox col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li>Email</li>
                <li>Resume</li>
                <li>Links (GitHub, LinkedIn, & Instagram)</li>
              </ul>
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
const mapState = (state) => {
  return {
  };
};

export default connect(mapState)(Contact);

/*///
 PROP TYPES
*////
Contact.propTypes = {
};
