'use strict'

const knex = require('knex')
const service = require('feathers-knex')
// const developerProject = require('./developerProject-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  const options = {
    Model: knex(app.get('db')),
    name: 'Developers_Projects'
  }

  // Initialize our service with any options it requires
  app.use('/developersProjects', service(options))

  // Get our initialize service to that we can bind hooks
  const developerProjectService = app.service('/developersProjects')

  // Set up our before hooks
  developerProjectService.before(hooks.before)

  // Set up our after hooks
  developerProjectService.after(hooks.after)
}
