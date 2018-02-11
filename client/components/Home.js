import React, {Component} from 'react';
import {Contact, ProjectsHighlight, Skills, Slideshow, Welcome} from './index';
import $ from 'jquery';

/*///
 COMPONENT
*////
class Home extends Component {

  constructor(props) {
    super(props);

    this.handleHomeBackgroundColor = this.handleHomeBackgroundColor.bind(this);
    this.handleBackgrounds = this.handleBackgrounds.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleBackgrounds);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleBackgrounds);
  }

  handleHomeBackgroundColor(blueBackground, redBackground, homeBackgrounds) {
    const windowTopEdge = $(window).scrollTop();
    const windowBottomEdge = windowTopEdge + $(window).height();
    const documentBottomEdge = $(document).height();
    // return if element is between window's top and bottom edges (boolean)
    const elementOnScreen = el => {
      el = $(el);
      const offset = 300;
      const elTopEdge = el.offset().top + offset;

      return elTopEdge <= windowBottomEdge;
    };
    const showBackground = background => {
      background.style.visibility = 'visible';
    };
    const hideBackground = background => {
      background.style.visibility = 'hidden';
    };

    let idx;
    if (windowBottomEdge >= documentBottomEdge - 20) {
      idx = 2;   // display greenBackground when user has scrolled to bottom of document
    } else if (elementOnScreen(redBackground)) {
      idx = 0; // redBackground is index 0
    } else if (elementOnScreen(blueBackground)) {
      idx = 1; // blueBackground is index 1
    } else {
      idx = 2; // greenBackground is index 2
    }

    homeBackgrounds.forEach((background, i) => {
      if (i === idx) {
        showBackground(background);
      } else {
        hideBackground(background);
      }
    });
  }

  handleBackgrounds() {
    this.handleHomeBackgroundColor(
      document.querySelector('.blue-fixed-background'),  // starting element of blue background
      document.querySelector('.red-fixed-background'),  // starting element of red background
      [...document.getElementsByClassName('home-background')]  // array of all home-background elements
    );
  }

  render() {
    return (
      <div>
        <Slideshow />
        <Welcome />
        <ProjectsHighlight />
        <Skills />
        <Contact />
        <div className="home-dark-fixed-background" />
        <div className="home-background red-fixed-background" style={{visibility: 'hidden'}} />
        <div className="home-background blue-fixed-background" style={{visibility: 'hidden'}} />
        <div className="home-background green-fixed-background" style={{visibility: 'hidden'}} />
      </div>
    );
  }
}

export default Home;
