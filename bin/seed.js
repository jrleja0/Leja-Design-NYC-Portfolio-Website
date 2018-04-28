const db = require('../server/db');
const Promise = require('bluebird');

const data = {
  image: [
    {
      name: 'seconddibs1',
      imagePath: 'assets/projects/seconddibs/screenshots.gif',
      category: 'project',
      projectName: 'SecondDibs//Ecommerce Site',
      description: 'Ecommerce site inspired by 1stdibs.com — Users can browse and search items, make purchases, view order history, and save a list of favorite items, with or without creating a user account',
      technologies: 'JavaScript - React, Redux; Node, Express, PostgreSQL/Sequelize, Express-Session & Passport.js for authentication; HTML/SCSS, Material-UI',
      linkProject: 'https://seconddibs.herokuapp.com',
      linkGitHub: 'https://github.com/jrleja0/SecondDibs-Ecommerce-Site',
    },
    {
      name: 'smashbots1',
      imagePath: 'assets/projects/smashbots/smashbots_intro.gif',
      category: 'project',
      projectName: 'Smash-Bots',
      description: 'Smash-Bots is a 2-D multiplayer online fighting game, loosely based off the game Super Smash Brothers, with an item store and robots. This group project was completed in two and a half weeks.',
      technologies: 'JavaScript - Phaser, React, and Redux for the front end; Node, Express, and PostgreSQL/Sequelize for the back end; Socket.io for multiplayer functionality; HTML/CSS.',
      linkProject: 'https://smashbots.herokuapp.com',
      linkDemo: 'https://www.youtube.com/watch?v=903YYFBc9V8',
      linkGitHub: 'https://github.com/jrleja0/Smash-Bots',
    },
    {
      name: 'd3TopSearchedArtists1',
      imagePath: 'assets/projects/d3_top_searched_artists/screenshots.gif',
      category: 'project',
      projectName: 'D3.js Visualization://Top Searched Visual Artists',
      description: 'Data visualizations using D3.js of the top 20 most searched visual artists on artnet.com in Sept 2017. Visualizations include: tree map, bubble chart, and plain list.',
      technologies: 'JavaScript - React, D3; Node, Express; HTML/SCSS',
      linkProject: 'https://top-searched-artists-09-2017.herokuapp.com',
      linkGitHub: 'https://github.com/jrleja0/D3-Visualization-Top-Searched-Artists',
    },
    /*
    {
      name: 'easyPressReleaseMaker1',
      imagePath: 'assets/projects/easy_press_release_maker/screenshot1.jpg',
      category: 'project',
      projectName: 'Easy Press Release//Maker',
      description: 'A prototype full stack RESTful CRUD app that creates press releases quickly and easily. This solo project is in development.',
      technologies: 'JavaScript - React, Redux; Node, Express, and PostgreSQL/Sequelize; HTML/SCSS.',
      linkGitHub: 'https://github.com/jrleja0/Easy-Press-Release-Maker',
    },
    */
    /*
    {
      name: 'quickLookChromeExt1',
      imagePath: 'assets/projects/quick_look_chrome_ext/screenshot1.jpg',
      category: 'project',
      projectName: '"Quick Look" Google Search//Chrome Extension',
      description: 'A simple Chrome extension that searches Google for top titles related to your search.',
      technologies: 'JavaScript - React, Axios, Cheerio, Webpack; HTML/CSS',
      linkGitHub: 'https://github.com/jrleja0/quick-look-google-search-chrome-extension',
    },
    */
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
