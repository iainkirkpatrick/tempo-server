'use strict'

const knex = require('knex')
const service = require('feathers-knex')
// const project = require('./project-model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  const options = {
    Model: knex(app.get('db')),
    name: 'projects'
  }

  // Initialize our service with any options it requires
  app.use('/projects', service(options))

  // Get our initialize service to that we can bind hooks
  const projectService = app.service('/projects')

  // Set up our before hooks
  projectService.before(hooks.before)

  // Set up our after hooks
  projectService.after(hooks.after)
}
