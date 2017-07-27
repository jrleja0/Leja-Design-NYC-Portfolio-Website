import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const imageData = [
    {
      name: 'smashbots1',
      path: 'assets/projects/smashbots/final1_screenshot.jpg',
      category: 'project',
      description: 'This is an image of Smash-Bots.',
    },
    {
      name: 'colorChaos1',
      path: 'assets/projects/color_chaos/game2.jpg',
      category: 'project',
      description: 'This is an image of Color Chaos.',
    },
    {
      name: 'diningWithTheStars1',
      path: 'assets/projects/dining_with_the_stars/screenshot_zoolander.jpg',
      category: 'project',
      description: 'This is an image of Dining with the Stars.',
    },
    {
      name: 'techTalkPaperJS1',
      path: 'assets/projects/tech_talk_paperjs/tech_talk_paperjs.jpg',
      category: 'project',
      description: 'This is an image of "Intro to Paper.js" tech talk.',
    }
  ];

/*///
 COMPONENT
*////
const HomeBody = (props) => {

  return (
    <div>
      <div>
        <h3>Projects</h3>
      </div>
      <div>
        <ul>
        {
        imageData.map(image => (
          <div key={image.name}>
            <li>{image.name}</li>
            <img src={image.path} alt={image.name} />
          </div>
        ))
        }
        </ul>
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

export default connect(mapState)(HomeBody);

/*///
 PROP TYPES
*////
HomeBody.propTypes = {
};
