import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


/*///
 COMPONENT
*////
const Contact = (props) => {

  return (
    <div>
      <div className="container-fluid redBackground">
        <div className="div-contactMeTitle">
          <img className="img-fluid" src="/assets/text/contactMeAndConnectBlue.png" alt="Contact Me And Connect" />
        </div>
        <div className="container-fluid">
          <div className="row top-bottom-margin-30">
            <div className="headshotBackground col-lg-6 col-md-6 col-sm-12" />
            <div className="contact-textbox col-lg-6 col-md-6 col-sm-12">
              <div className="contact-textbox-inner">
                <ul>
                  <li className="li-extra-padding-bottom">
                    <Link className="glyphicon glyphicon-envelope" to="mailto:lejadesign@gmail.com">
                      <span> lejadesign@gmail.com</span>
                    </Link>
                  </li>
                  <li className="glyphicon glyphicon-briefcase li-extra-padding-bottom"><span> Resume</span></li>
                  <br />
                  <li className="glyphicon glyphicon-link"><span> Links:</span></li>
                  <li><span className="social-labels"> GitHub  |  LinkedIn  |  Instagram</span></li>
                  <li>
                    <div className="div-socialMediaLinks">
                      <span>
                        <Link to="https://github.com/jrleja0">
                        <img className="social-icon" src="/assets/social_icons/github.png" alt="GitHub profile" />
                        </Link>
                      </span>
                      <span>
                        <Link to="https://www.linkedin.com/in/jrleja">
                        <img className="social-icon" src="/assets/social_icons/linkedin.png" alt="LinkedIn profile" />
                        </Link>
                      </span>
                      <span>
                        <Link to="https://www.instagram.com/jrleja">
                        <img className="social-icon" src="/assets/social_icons/instagram.png" alt="Instagram profile" />
                        </Link>
                      </span>
                    </div>
                  </li>
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
