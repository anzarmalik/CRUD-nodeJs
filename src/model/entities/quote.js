const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const quotes = sequelize.define('quote', {
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
