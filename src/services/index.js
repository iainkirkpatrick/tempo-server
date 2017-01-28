'use strict'

import authentication from './authentication'
import user from './user'
import graphql from './graphql'

import project from './project'
import developer from './developer'

// N.B. this needs to be module.exports to work with feathres-generator
module.exports = function () {
  const app = this

  app.configure(authentication)
  app.configure(user)
  app.configure(project)
  app.configure(developer)

  app.configure(graphql)
}
