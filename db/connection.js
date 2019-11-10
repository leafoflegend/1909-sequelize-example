const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://localhost:5432/hogwarts', {
  logging: false,
});

module.exports = connection;
