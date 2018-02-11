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

  handleHomeBackgroundColor(blueBackground, greenBackground, redBackground, homeBackgrounds) {
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
      //background.style.zIndex = -998; // safari should not change zIndex
      //background.style.opacity = 1;
    };
    const hideBackground = background => {
      background.style.visibility = 'hidden';
      //background.style.zIndex = -999; // safari should not change zIndex
      //background.style.opacity = 0;
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

    // let color;
    // if (elementOnScreen(redBackground)) {
    //   color = 'red';
    // } else if (elementOnScreen(blueBackground)) {
    //   color = 'blue';
    // } else {
    //   color = 'green';
    // }

    // homeBackgrounds.forEach(background => {
    //   if (background.className.includes(color)) {
    //     showBackground(background);
    //   } else {
    //     hideBackground(background);
    //   }
    // });
  }

  handleBackgrounds() {
    this.handleHomeBackgroundColor(
      document.querySelector('.blue-fixed-background'),  // starting element of blue background
      document.querySelector('.green-fixed-background'),  // starting element of green background
      document.querySelector('.red-fixed-background'),  // starting element of red background
      [...document.getElementsByClassName('home-background')]  // array of all home-background elements
    );
  }

  render() {
    return (
      <div>
        {/* <div className="home-dark-fixed-background"> */}
          <Slideshow />
          <Welcome />
          <ProjectsHighlight />
          <Skills />
          <Contact />
          <div className="home-dark-fixed-background" />
          <div className="home-background red-fixed-background" style={{opacity: 1, visibility: 'hidden'}} />
          <div className="home-background blue-fixed-background" style={{opacity: 1, visibility: 'hidden'}} />
          <div className="home-background green-fixed-background" style={{opacity: 1, visibility: 'hidden'}} />
        {/* </div> */}
      </div>
    );
  }
}

export default Home;
