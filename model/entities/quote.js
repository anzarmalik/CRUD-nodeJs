var Sequelize = require('sequelize')
var sequelize = require('../../config/db')

var quotes = sequelize.define('quote', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    author: Sequelize.STRING,
    tag: Sequelize.STRING,
    quote: Sequelize.TEXT,
})

module.exports = quotes 