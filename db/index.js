const db = require('./connection.js');
const seed = require('./seed.js');
const { House, Mage } = require('./models/index.js');

Mage.belongsTo(House);
House.hasMany(Mage);

module.exports = {
  db,
  seed,
  models: {
    House,
    Mage,
  },
};
