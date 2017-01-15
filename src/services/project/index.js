'use strict';

const service = require('feathers-sequelize');
const project = require('./project-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: project(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/projects', service(options));

  // Get our initialize service to that we can bind hooks
  const projectService = app.service('/projects');

  // Set up our before hooks
  projectService.before(hooks.before);

  // Set up our after hooks
  projectService.after(hooks.after);
};
