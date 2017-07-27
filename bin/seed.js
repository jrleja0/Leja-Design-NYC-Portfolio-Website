const db = require('../server/db');
const Promise = require('bluebird');

const data = {
  image: [
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
  ]
};

db.sync({force: true})
  .then(() => {
    console.log('Dropped old data, now inserting seed data.');
    return Promise.map(Object.keys(data), modelName => {
      return Promise.map(data[modelName], modelInstance => {
        return db.model(modelName).create(modelInstance);
      });
    });
  })
  .then(() => {
    console.log('Finished inserting seed data.');
  })
  .catch(console.error.bind(console))
  .finally(() => {
    db.close();
    return null;
  });
