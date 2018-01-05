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
      linkGitHub: 'https://github.com/jrleja0/Smash-Bots',
    },
    {
      name: 'colorChaos1',
      imagePath: 'assets/projects/color_chaos/game2.jpg',
      titlePath: 'assets/text/catchingMatchingColorChaosGame.png',
      category: 'project',
      projectName: '"Catching Matching//Color Chaos!" Game',
      description: '"Catching Matching Color Chaos!" is a fast-paced color matching multiplayer game that was created as a solo hackathon project in 4 days.',
      technologies: 'JavaScript - Paper.js, Socket.io, Node, Express; HTML/CSS.',
      linkProject: 'https://color-chaos.herokuapp.com',
      linkDemo: 'https://www.youtube.com/watch?v=EYTeEmcarnY',
      linkGitHub: 'https://github.com/jrleja0/Color-Chaos-Hackathon-Paper.JS-Game',
    },
    {
      name: 'diningWithTheStars1',
      imagePath: 'assets/projects/dining_with_the_stars/screenshot_zoolander.jpg',
      titlePath: 'assets/text/diningWithTheStarsEcommerceSite.png',
      category: 'project',
      projectName: 'Dining with the Stars//Ecommerce Site',
      description: 'Dining with the Stars is a prototype ecommerce site for a trendy business that sells dining experiences with famous celebrities.',
      technologies: 'JavaScript - React, Redux; Node, Express, and PostgreSQL/Sequelize; HTML/CSS.',
      linkProject: 'https://doa-grace-shopper.herokuapp.com',
      linkGitHub: 'https://github.com/jrleja0/Dining-with-the-Stars-Ecommerce',
    },
    {
      name: 'd3TopSearchedArtists1',
      imagePath: 'assets/projects/d3_top_searched_artists/screenshot1.jpg',
      category: 'project',
      projectName: 'D3.js Visualization://Top Searched Visual Artists',
      description: 'Data visualizations using D3.js of the top 20 most searched visual artists on artnet.com in Sept 2017. Visualizations include: tree map, bubble chart, and plain list.',
      technologies: 'JavaScript - React, D3; Node, Express; HTML/SCSS',
      linkProject: 'https://top-searched-artists-09-2017.herokuapp.com',
      linkGitHub: 'https://github.com/jrleja0/D3-Visualization-Top-Searched-Artists',
    },
    {
      name: 'easyPressReleaseMaker1',
      imagePath: 'assets/projects/easy_press_release_maker/screenshot1.jpg',
      category: 'project',
      projectName: 'Easy Press Release//Maker',
      description: 'A prototype fullstack RESTful CRUD app that creates press releases quickly and easily.',
      technologies: 'JavaScript - React, Redux; Node, Express, and PostgreSQL/Sequelize; HTML/SCSS.',
      linkGitHub: 'https://github.com/jrleja0/Easy-Press-Release-Maker',
    },
    {
      name: 'quickLookChromeExt1',
      imagePath: 'assets/projects/quick_look_chrome_ext/screenshot1.jpg',
      category: 'project',
      projectName: '"Quick Look" Google Search//Chrome Extension',
      description: 'A simple Chrome extension that searches Google for top titles related to your search.',
      technologies: 'JavaScript - React, Axios, Cheerio, Webpack; HTML/CSS',
      linkGitHub: 'https://github.com/jrleja0/quick-look-google-search-chrome-extension',
    },
    {
      name: 'tileSwappingPuzzleGame1',
      imagePath: 'assets/projects/tile_swapping_puzzle_game/screenshot1.jpg',
      category: 'project',
      projectName: 'Tile Swapping//Puzzle Game',
      description: 'HTML5 Canvas & JavaScript puzzle game. Click two tiles to swap them. Swap tiles until the image is unscrambled.',
      technologies: 'JavaScript, HTML5 Canvas; HTML/CSS',
      linkProject: 'https://jrleja0.github.io/tile-swapping-game-jrleja0',
      linkGitHub: 'https://github.com/jrleja0/tile-swapping-game-jrleja0',
    },
    {
      name: 'movingTilesAnimation1',
      imagePath: 'assets/projects/moving_tiles_animation/screenshot1.jpg',
      category: 'project',
      projectName: 'Moving Tiles//Animation',
      description: 'HTML5 Canvas & JavaScript animation.',
      technologies: 'JavaScript, HTML5 Canvas; HTML/CSS',
      linkProject: 'https://jrleja0.github.io/Tile-Abstraction-v2',
      linkGitHub: 'https://github.com/jrleja0/Tile-Abstraction-v2',
    },
    {
      name: 'techTalkPaperJS1',
      imagePath: 'assets/projects/tech_talk_paperjs/tech_talk_paperjs.jpg',
      titlePath: 'assets/text/introToPaper.jsTechTalk.png',
      category: 'project',
      projectName: '"Intro to Paper.js"//Tech Talk',
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
