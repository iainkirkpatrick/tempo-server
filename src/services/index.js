'use strict'

import authentication from './authentication'
import user from './user'
import graphql from './graphql'

export default function () {
  const app = this

  app.configure(authentication)
  app.configure(user)
  app.configure(graphql)
}
