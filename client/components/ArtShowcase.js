import React from 'react';
import {Spinner} from './index';
import {handleImageOnLoad} from '../utilityFunctions';

/*///
 COMPONENT
*////
const ArtShowcase = (props) => {

  return (
    <div>
      <div className="blue-fixed-background">
        <div className="container-fluid">
          <div className="row">
            <div className="artShowcase-main-title">
              <h1 className="heading-font">Art Showcase<br />
                <span className="subheading-font">Art | Photo | Design</span>
              </h1>
            </div>
          </div>
          <div className="div-artShowcase-main-img">
            <Spinner />
            <img src="/assets/photos_with_abstractions/diptych1_london_nyc_frame.jpg"
              alt="Diptych: Covent Garden, London & The Bowery, NYC"
              onLoad={handleImageOnLoad} />
            <img className="text-comingSoon" src="/assets/text/comingSoon.png"
              alt="Coming Soon!"
              onLoad={handleImageOnLoad} />
            <div className="art-image-description">
              <span>Diptych: Covent Garden, London & The Bowery, NYC</span>
            </div>
            <div className="div-img-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtShowcase;
