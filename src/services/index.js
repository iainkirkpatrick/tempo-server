'use strict'
// const authentication = require('./authentication')
// const user = require('./user')
import graphql from './graphql'

export default function () {
  const app = this

  app.configure(graphql)
}
