import React from 'react';

/*///
 COMPONENT
*////
const ArtShowcase = (props) => {

  return (
    <div>
      <div className="container-fluid blueBackground">
        <div className="artShowcase-main-title">
          <img className="img-fluid" src="/assets/text/artShowcaseTitle.png" alt="Art Showcase: Art | Photo | Design" />
          <div className="div-img-cover" />
        </div>
        <div className="div-artShowcase-main-img">
          <img className="img-fluid" src="/assets/photos_with_abstractions/diptych1_london_nyc_frame.jpg" alt="Diptych: Covent Garden, London & The Bowery, NYC" />
          <img className="text-comingSoon img-fluid" src="/assets/text/comingSoon.png" alt="Coming Soon!" />
          <div className="art-image-description">
            <span>Diptych: Covent Garden, London & The Bowery, NYC</span>
          </div>
          <div className="div-img-cover" />
        </div>
      </div>
    </div>
  );
};

export default ArtShowcase;
