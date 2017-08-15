import React from 'react';
import {connect} from 'react-redux';

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
            <li><span className="green-text">J R Leja Design NYC</span> showcases the web apps, games, and other</li>
            <li className="li-add-padding-bottom-20">software development and art projects of <span className="green-text">Jasiu Leja</span>.</li>
            <li>Jasiu is a NYC-based Fullstack/Front-End <span className="green-text">Software Developer</span></li>
            <li className="li-add-padding-bottom-20">with a passion for art and design.</li>
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
// const mapState = null;

// export default connect(mapState)(Welcome);
export default Welcome;
