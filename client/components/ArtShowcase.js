import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/*///
 COMPONENT
*////
const ArtShowcase = (props) => {

  return (
    <div>
      <div className="container-fluid blueBackground">
        <div className="basic-div-main-title top-bottom-margin-30">
          <img className="img-fluid" src="/assets/text/artShowcaseTitle.png" alt="Art Showcase: Art | Photo | Design" />
          <div className="div-img-cover" />
        </div>
        <div className="div-artGrid-main-img">
          <img className="img-fluid" src="/assets/photos_with_abstractions/diptych1_london_nyc_frame.jpg" alt="Diptych: Covent Garden, London & The Bowery, NYC" />
          <img className="text-comingSoon img-fluid" src="/assets/text/comingSoon.png" alt="Coming Soon!" />
          <div className="div-img-cover" />
        </div>
      </div>
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = (state) => {
  return {
  };
};

export default connect(mapState)(ArtShowcase);

/*///
 PROP TYPES
*////
ArtShowcase.propTypes = {
};
