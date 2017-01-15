'use strict'

import authentication from 'feathers-authentication'
import local from 'feathers-authentication-local'

module.exports = function () {
  const app = this

  let config = app.get('auth')

  app.configure(authentication(config))
    .configure(local())
}
