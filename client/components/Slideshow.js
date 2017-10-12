import React from 'react';
import {Carousel} from 'react-bootstrap';


/*///
 COMPONENT
*////
const Slideshow = (props) => {

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="Welcome!" src="/assets/welcomeSlideWide.jpg" />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="Software Projects" src="/assets/projectSlideWide.jpg" />
          <Carousel.Caption>
            <h3>Software Projects</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="Art" src="/assets/artSlideWide.jpg" />
          <Carousel.Caption>
            <h3>Art</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </div>
  );
};

export default Slideshow;
