const config = require('./knexfile').development
const knex = require('knex')
const connection = knex(config)

module.exports = connection