const express = require('express');
const path = require('path');
const chalk = require('chalk');
const {
  db,
  models,
  seed,
} = require('./db/index.js');

const { House, Mage } = models;

const PORT = 3000;

const app = express();

app.get('/api/students/:id', (req, res, next) => {
  Mage.findByPk(req.params.id)
    .then(mageOrEmpty => {
      if (!mageOrEmpty) {
        res.sendStatus(404);
      } else {
        res.send(mageOrEmpty);
      }
    })
    .catch(e => {
      console.log(chalk.red(`Error student with ID: ${req.params.id}.`), e);
      next(e);
    })
});

app.get('/api/houses', (req, res, next) => {
  House.findAll({
    include: [Mage]
  })
    .then(houses => {
      res.send(houses);
    })
    .catch(e => {
      console.log(chalk.red('Error getting all houses.'), e);
      next(e);
    });
});

db.sync({ force: true })
  .then(() => seed())
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Application started on http://localhost:${PORT}`));
    });
  });
