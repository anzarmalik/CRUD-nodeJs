const Sequelize = require('sequelize');
const database = require('../../config/db');

const quotes = database.getInstance().define('quote', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  author: Sequelize.STRING,
  tag: Sequelize.STRING,
  quote: Sequelize.TEXT,
});

module.exports = quotes;
