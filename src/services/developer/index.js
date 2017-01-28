'use strict'

const knex = require('knex')
const service = require('feathers-knex')
// const developer = require('./developer-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  const options = {
    Model: knex(app.get('db')),
    name: 'Developers'
  }

  // Initialize our service with any options it requires
  app.use('/developers', service(options))

  // Get our initialize service to that we can bind hooks
  const developerService = app.service('/developers')

  // Set up our before hooks
  developerService.before(hooks.before)

  // Set up our after hooks
  developerService.after(hooks.after)
}
