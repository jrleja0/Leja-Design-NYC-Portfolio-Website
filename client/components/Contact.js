import React from 'react';

/*///
 COMPONENT
*////
const Contact = (props) => {

  return (
    <div>
      <div className="red-fixed-background">
        <div className="container-fluid">
          <div className="row">
            <div className="contact-main-title">
              <h1 className="heading-font">Contact Me<br />
                <span className="subheading-font">& Connect</span>
              </h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row contact-row-below-title top-bottom-margin-30">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="div-headshot">
                  <img src="/assets/people/headshot2.jpg" alt="Jasiu Leja - Headshot" />
                  <div className="div-img-cover" />
                </div>
              </div>
              <div className="contact-container col-lg-6 col-md-6 col-sm-12">
                <div className="contact-textbox">
                  <ul>
                    <li className="li-add-padding-bottom-40">
                      <i className="fa fa-star" aria-hidden="true" />
                      <span>&emsp; </span><span>Jasiu Leja</span>
                    </li>
                    <li className="li-add-padding-bottom-40">
                      <a className="highlightLink" href="mailto:jrleja.design@gmail.com" aria-label="Email Link">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <span>&emsp; </span><span className="span-underline">jrleja.design@gmail.com</span>
                      </a>
                    </li>
                    <li className="li-add-padding-bottom-40">
                      <a className="highlightLink" href="/resume/Jasiu_Leja_Resume.pdf">
                        <i className="fa fa-briefcase" aria-hidden="true" />
                        <span>&emsp; </span><span className="span-underline">Resume</span>
                      </a>
                    </li>
                    <li className="li-add-padding-bottom-20">
                      <i className="fa fa-link" aria-hidden="true" />
                      <span>&emsp; </span><span>Links:</span>
                    </li>
                    <div className="div-socialMediaLinks">
                      <a href="https://github.com/jrleja0" type="button" aria-label="GitHub Profile">
                        <i className="fa fa-github social-icon" aria-hidden="true" />
                        <p>GitHub</p>
                      </a>
                      <a className="a-td-button" href="https://linkedin.com/in/jrleja" type="button" aria-label="LinkedIn Profile">
                        <i className="fa fa-linkedin-square social-icon" aria-hidden="true" />
                        <p>LinkedIn</p>
                      </a>
                      <a className="a-td-button" href="https://instagram.com/jrleja" type="button" aria-label="Instagram Profile">
                        <i className="fa fa-instagram social-icon" aria-hidden="true" />
                        <p>Instagram</p>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
