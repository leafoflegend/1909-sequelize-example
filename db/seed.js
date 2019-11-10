const { House, Mage } = require('./models/index.js');
const chalk = require('chalk');

const seed = () => {
  const magesToBe = [
    {
      name: 'Harry Potter',
      gender: 'Male',
    },
    {
      name: 'Hermione Granger',
      gender: 'Female',
    },
    {
      name: 'Ronald Weasley',
      gender: 'Male',
    },
  ];

  const gryffindor = {
    name: 'Gryffindor',
  };

  return House.create(gryffindor).then(house => {
    return Promise.all(magesToBe.map(mage => {
      return Mage.create({
        ...mage,
        houseId: house.id,
      })
    }));
  });
};

module.exports = seed;
