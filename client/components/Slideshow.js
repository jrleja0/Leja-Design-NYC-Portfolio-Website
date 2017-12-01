import React from 'react';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
class Slideshow extends React.Component {

  constructor(props) {
    super(props);

    this.changeSlide = this.changeSlide.bind(this);
    this.skipToSlide = this.skipToSlide.bind(this);
  }

  componentDidMount() {
    this.changeSlideInterval = window.setInterval(this.changeSlide, 10000);
  }

  componentWillUnmount() {
    window.clearInterval(this.changeSlideInterval);
  }

  changeSlide(previousZIndexesToSkipTo) {
    const slides = [...document.getElementsByClassName('slide')];
    const yellowGolden = '#ffee00';
    let activeSlideNum;
    slides.forEach((slide, i) => {
      let zIndex;
      if (previousZIndexesToSkipTo) {
        zIndex = previousZIndexesToSkipTo[i];
        slide.style.display = 'none';  // if skipping to a slide, first change all slides to display: none;
      } else {
        zIndex = slide.style.zIndex;
      }
      switch (zIndex) {
        case '10':
          slide.style.zIndex = '20';
          slide.style.display = 'none';
          break;
        case '20':
          slide.style.zIndex = '30';
          slide.style.display = 'block';
          activeSlideNum = slide.dataset.slideNum;
          break;
        case '30':
          slide.style.zIndex = '10';
          slide.display = 'none';
          break;
      }
    });
    const thumbnails = [...document.getElementsByClassName('thumbnail')];
    thumbnails.forEach(thumbnail => {
      if (thumbnail.dataset.thumbnailNum === activeSlideNum) {
        thumbnail.style.opacity = '1';
        thumbnail.style.borderColor = yellowGolden;
      } else {
        thumbnail.style.opacity = '0.6';
        thumbnail.style.borderColor = 'transparent';
      }
    });
  }

  /// TODO: Refactor to work for x number of slides:
  skipToSlide(slideNum) {
    let zIndexes;  //  previousZIndexesToSkipTo
    switch (slideNum) {
      case '1':
        zIndexes = ['20', '10', '30'];
        break;
      case '2':
        zIndexes = ['30', '20', '10'];
        break;
      case '3':
        zIndexes = ['10', '30', '20'];
        break;
    }
    window.clearInterval(this.changeSlideInterval);
    this.changeSlide(zIndexes);
    this.changeSlideInterval = window.setInterval(this.changeSlide, 10000);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="main-slide-container col-sm-12 col-md-12 col-lg-9">
            <div className="slide"
              style={ {zIndex: 30, display: 'block'} }
              data-slide-num="1">
              <img src="/assets/welcomeSlideWide.jpg" alt="Welcome!" />
              <div className="div-img-cover" />
            </div>
            <Link to="/projects">
              <div className="slide"
                style={ {zIndex: 20, display: 'none'} }
                data-slide-num="2">
                <img src="/assets/projectSlideWide.jpg" alt="Coding Projects & Apps" />
                <div className="div-img-cover" />
                <span>Coding Projects & Apps</span>
              </div>
            </Link>
            <Link to="/art">
              <div className="slide"
                style={ {zIndex: 10, display: 'none'} }
                data-slide-num="3">
                <img src="/assets/artSlideWide.jpg" alt="Art" />
                <div className="div-img-cover" />
                <span>Art</span>
              </div>
            </Link>
          </div>
          <div className="slide-thumbnails-container col-sm-12 col-md-12 col-lg-3">
            <div className="thumbnail"
              style={ {opacity: 1} }
              data-thumbnail-num="1"
              onClick={() => this.skipToSlide('1')}>
              <img src="/assets/welcomeSlideWide.jpg" alt="Welcome!" />
              <div className="div-img-cover" />
            </div>
            <div className="thumbnail"
              style={ {opacity: 0.6, borderColor: 'transparent'} }
              data-thumbnail-num="2"
              onClick={() => this.skipToSlide('2')}>
              <img src="/assets/projectSlideWide.jpg" alt="Coding Projects & Apps" />
              <div className="div-img-cover" />
            </div>
            <div className="thumbnail"
              style={ {opacity: 0.6, borderColor: 'transparent'} }
              data-thumbnail-num="3"
              onClick={() => this.skipToSlide('3')}>
              <img src="/assets/artSlideWide.jpg" alt="Art" />
              <div className="div-img-cover" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
