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
        <div className="basic-div-main-title">
          <img className="img-fluid" src="/assets/text/welcome.png" alt="Welcome" />
        </div>
        <div className="container-fluid">
          <div className="row top-bottom-margin-30">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="welcome-textbox">
                <p>
                  You've found the portfolio website of Jasiu Leja, Software Developer & Artist working and living in NYC.
                  <br />
                  Thanks for visiting!
                </p>
              </div>
            </div>
            <div className="welcome-img-background col-lg-6 col-md-6 col-sm-12" />
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

export default connect(mapState)(Welcome);

/*///
 PROP TYPES
*////
Welcome.propTypes = {
};
