const { STRING, BOOLEAN } = require('sequelize');
const db = require('../connection.js');

const Mage = db.define('mage', {
  name: {
    type: STRING,
    allowNull: false,
  },
  gender: {
    type: STRING,
    allowNull: false,
  },
  hasWand: {
    type: BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Mage;
