const Sequelize = require('sequelize');

var config

switch (process.env.NODE_ENV) {
  case 'production':
    config = require('./config').production
    break
  case 'staging':
    config = require('./config').staging
    break
  case 'local':
    config = require('./config').local
    break
  default:
    config = require('./config').local
    break
}





const sequelize = module.exports = new Sequelize(config.database, config.username, config.password,
  {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  });

sequelize.sync({
  force: false,
});

