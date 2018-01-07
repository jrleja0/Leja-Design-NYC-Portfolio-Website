import React, {Component} from 'react';
import {Contact, ProjectsHighlight, Skills, Slideshow, Welcome} from './index';

/*///
 COMPONENT
*////
class Home extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleHomeBackgroundColor);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleHomeBackgroundColor);
  }

  handleHomeBackgroundColor() {
    const homeBackgrounds = [...document.getElementsByClassName('home-background')];
    const showBackground = background => {
      background.style.zIndex = -998;
      background.style.opacity = 1;
    };
    const hideBackground = background => {
      background.style.zIndex = -999;
      background.style.opacity = 0;
    };
    if (window.scrollY >= 3125 && window.scrollY < 3875) {
      hideBackground(homeBackgrounds[0]);
      hideBackground(homeBackgrounds[2]);
      showBackground(homeBackgrounds[1]);  // blue
    } else if (window.scrollY >= 3875 && window.scrollY <= 4825) {
      hideBackground(homeBackgrounds[1]);
      hideBackground(homeBackgrounds[2]);
      showBackground(homeBackgrounds[0]);  // red
    } else {
      hideBackground(homeBackgrounds[0]);
      hideBackground(homeBackgrounds[1]);
      showBackground(homeBackgrounds[2]);  // green
    }
  }

  render() {
    return (
      <div>
        <Slideshow />
        <Welcome />
        <ProjectsHighlight />
        <Skills />
        <Contact />
        <div className="home-background red-fixed-background" />
        <div className="home-background blue-fixed-background" />
        <div className="home-background green-fixed-background" />
      </div>
    );
  }
}

export default Home;
