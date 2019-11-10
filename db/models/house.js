const { STRING } = require('sequelize');
const db = require('../connection.js');

const House = db.define('house', {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = House;
