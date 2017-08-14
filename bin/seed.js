const db = require('../server/db');
const Promise = require('bluebird');

const data = {
  image: [
    {
      name: 'smashbots1',
      imagePath: 'assets/projects/smashbots/smashbots_intro.gif',
      titlePath: 'assets/text/smashBots.png',
      category: 'project',
      projectName: 'Smash-Bots',
      description: 'Smash-Bots is a 2-D multiplayer online fighting game, loosely based off the game Super Smash Brothers, with an item store and robots.',
      technologies: 'JavaScript - Phaser, React, and Redux for the front end; Node, Express, and PostgreSQL/Sequelize for the backend; Socket.io for multiplayer functionality; HTML/CSS.',
      linkProject: 'https://smashbots.herokuapp.com',
      linkDemo: 'https://www.youtube.com/watch?v=903YYFBc9V8',
      linkGitHub: 'https://github.com/mikevg466/Smash-Bots',
    },
    {
      name: 'colorChaos1',
      imagePath: 'assets/projects/color_chaos/game2.jpg',
      titlePath: 'assets/text/catchingMatchingColorChaosGame.png',
      category: 'project',
      projectName: '"Catching Matching Color Chaos!" Game',
      description: '"Catching Matching Color Chaos!" is a fast-paced color matching multiplayer game that was created as a solo hackathon project in 4 days.',
      technologies: 'JavaScript - Paper.js, Socket.io, Node, Express; HTML/CSS.',
      linkProject: 'TBA',
      linkDemo: 'https://www.youtube.com/watch?v=EYTeEmcarnY',
      linkGitHub: 'https://github.com/jrleja0/Color-Chaos-Hackathon-Paper.JS-Game',
    },
    {
      name: 'diningWithTheStars1',
      imagePath: 'assets/projects/dining_with_the_stars/screenshot_zoolander.jpg',
      titlePath: 'assets/text/diningWithTheStarsEcommerceSite.png',
      category: 'project',
      projectName: 'Dining with the Stars Ecommerce Site',
      description: 'Dining with the Stars is a prototype ecommerce site for a trendy business that sells dining experiences with famous celebrities.',
      technologies: 'JavaScript - React, Redux; Node, Express, and PostgreSQL/Sequelize; HTML/CSS.',
      linkProject: 'https://doa-grace-shopper.herokuapp.com',
      linkGitHub: 'https://github.com/CandiceBousquet/GraceShopper',
    },
    {
      name: 'techTalkPaperJS1',
      imagePath: 'assets/projects/tech_talk_paperjs/tech_talk_paperjs.jpg',
      titlePath: 'assets/text/introToPaper.jsTechTalk.png',
      category: 'project',
      projectName: '"Intro to Paper.js" Tech Talk',
      description: 'In this "Intro to Paper.js" tech talk, learn the basics of Paper.js, the vector graphics library, including items, their hierarchy, and event handlers, for creating engaging animations.',
      linkDemo: 'https://www.youtube.com/watch?v=HYFUitjFQT0',
      linkGitHub: 'https://github.com/jrleja0/paper.js-Project-1',
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
