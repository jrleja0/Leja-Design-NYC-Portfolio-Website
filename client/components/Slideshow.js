import React from 'react';
// import {Carousel} from 'react-bootstrap';

/*///
 COMPONENT
*////
class Slideshow extends React.Component {

  constructor(props) {
    super(props);

    this.changeSlide = this.changeSlide.bind(this);
  }

  componentDidMount() {
    Slideshow.changeSlideInterval = window.setInterval(this.changeSlide, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(Slideshow.changeSlideInterval);
  }

  changeSlide() {
    const slides = [...document.getElementsByClassName('slide')];
    const yellowGolden = '#ffee00';
    let activeSlideNum;
    slides.forEach(slide => {
      switch (slide.style.zIndex) {
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

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="main-slide-container col-sm-12 col-md-12 col-lg-9">
            <img className="slide"
              style={ {zIndex: 30, display: 'block'} }
              data-slide-num="1"
              src="/assets/welcomeSlideWide.jpg" alt="Welcome!" />
            <img className="slide"
              style={ {zIndex: 20, display: 'none'} }
              data-slide-num="2"
              src="/assets/projectSlideWide.jpg" alt="Coding Projects & Apps" />
            <img className="slide"
              style={ {zIndex: 10, display: 'none'} }
              data-slide-num="3"
              src="/assets/artSlideWide.jpg" alt="Art" />
          </div>
          <div className="slide-thumbnails-container col-sm-12 col-md-12 col-lg-3">
            <img className="thumbnail"
              style={ {opacity: 1} }
              data-thumbnail-num="1"
              src="/assets/welcomeSlideWide.jpg" alt="Welcome!" />
            <img className="thumbnail"
              style={ {opacity: 0.6, borderColor: 'transparent'} }
              data-thumbnail-num="2"
              src="/assets/projectSlideWide.jpg" alt="Coding Projects & Apps" />
            <img className="thumbnail"
              style={ {opacity: 0.6, borderColor: 'transparent'} }
              data-thumbnail-num="3"
              src="/assets/artSlideWide.jpg" alt="Art" />
          </div>
        </div>
      </div>

      // <div>
      //   <Carousel>
      //     <Carousel.Item>
      //       <img width={900} height={500} alt="Welcome!" src="/assets/welcomeSlideWide.jpg" />
      //       <Carousel.Caption />
      //     </Carousel.Item>
      //     <Carousel.Item>
      //       <img width={900} height={500} alt="Software Projects" src="/assets/projectSlideWide.jpg" />
      //       <Carousel.Caption>
      //         <h3>Software Projects</h3>
      //       </Carousel.Caption>
      //     </Carousel.Item>
      //     <Carousel.Item>
      //       <img width={900} height={500} alt="Art" src="/assets/artSlideWide.jpg" />
      //       <Carousel.Caption>
      //         <h3>Art</h3>
      //       </Carousel.Caption>
      //     </Carousel.Item>
      //   </Carousel>
      // </div>

    );
  }
}

export default Slideshow;
