const db = require('../server/db');
const Promise = require('bluebird');

const data = {
  image: [
    {
      name: 'file1',
      path: 'path/file1.jpg',
      category: 'project',
      description: 'This is an image.',
    },
    {
      name: 'file2',
      path: 'path/file2.jpg',
      category: 'project',
      description: 'This is an image.',
    },
    {
      name: 'file3',
      path: 'path/file3.jpg',
      category: 'project',
      description: 'This is an image.',
    },
    {
      name: 'file4',
      path: 'path/file4.jpg',
      category: 'project',
      description: 'This is an image.',
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
