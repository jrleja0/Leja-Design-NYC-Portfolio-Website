const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imagePath: {
    type: Sequelize.STRING,
    allowNull: false
  },
  titlePath: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  projectName: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  technologies: {
    type: Sequelize.TEXT
  },
  linkProject: {
    type: Sequelize.TEXT
  },
  linkDemo: {
    type: Sequelize.TEXT
  },
  linkGitHub: {
    type: Sequelize.TEXT
  }
});

module.exports = Image;
