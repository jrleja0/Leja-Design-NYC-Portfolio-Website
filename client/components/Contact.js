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
        <div className="basic-div-main-title contact-title">
          <img className="img-fluid" src="/assets/text/contactMeAndConnectBlue.png" alt="Contact Me And Connect" />
        </div>
        <div className="container-fluid">
          <div className="row top-bottom-margin-30">
            <div className="headshotBackground col-lg-6 col-md-6 col-sm-12" />
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="contact-textbox">
                <ul>
                  <li className="li-add-padding-bottom-40">
                    <a href="mailto:lejadesign@gmail.com" aria-label="Email Link">
                      <span className="glyphicon glyphicon-envelope" aria-hidden="true" />
                      <span>&emsp; </span><span>lejadesign@gmail.com</span>
                    </a>
                  </li>
                  <li className="li-add-padding-bottom-40">
                    <span className="glyphicon glyphicon-briefcase" aria-hidden="true" />
                    <span>&emsp; </span><span>Resume</span>
                  </li>
                  <li className="li-add-padding-bottom-20">
                    <span className="glyphicon glyphicon-link" aria-hidden="true" />
                    <span>&emsp; </span><span>Links:</span>
                  </li>
                  <div className="div-socialMediaLinks">
                    <li>
                      <div className="highlight-pink">
                        <a href="https://github.com/jrleja0">
                          <img className="social-icon" src="/assets/social_icons/github.png" alt="GitHub profile" />
                          <p>GitHub</p>
                        </a>
                      </div>
                      <div className="highlight-pink">
                        <a href="https://www.linkedin.com/in/jrleja">
                          <img className="social-icon" src="/assets/social_icons/linkedin.png" alt="LinkedIn profile" />
                          <p>LinkedIn</p>
                        </a>
                      </div>
                      <div className="highlight-pink">
                        <a href="https://www.instagram.com/jrleja">
                          <img className="social-icon" src="/assets/social_icons/instagram.png" alt="Instagram profile" />
                          <p>Instagram</p>
                        </a>
                      </div>
                    </li>
                  </div>
                </ul>
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
