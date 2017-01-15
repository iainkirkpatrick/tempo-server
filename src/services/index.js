'use strict'

import authentication from './authentication'
import user from './user'
import graphql from './graphql'

import project from './project'

// N.B. this needs to be module.exports to work with feathres-generator
module.exports = function () {
  const app = this

  app.configure(authentication)
  app.configure(user)
  app.configure(graphql)
  app.configure(project)
}
