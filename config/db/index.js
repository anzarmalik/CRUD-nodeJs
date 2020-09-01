const Sequelize = require('sequelize')

const config = {
    "database": "quote",
    "username": "root",
    "password": "",
    "host": "127.0.0.1"
}

const sequelize = module.exports = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.sync({
    force: false
});