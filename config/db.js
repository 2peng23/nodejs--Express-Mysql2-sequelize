// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express2', 'root', 'Asul@020311', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
