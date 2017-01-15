'use strict'

const hooks = require('./hooks')
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import schema from './schema'
import resolvers from './resolvers'

module.exports = function () {
  const app = this
  const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers
  })

  // Initialize our service with any options it requires
  app.use('/graphql', graphqlExpress((req) => {
    let { token, provider } = req.feathers
    return {
      schema: executableSchema,
      context: {
        token,
        provider
      }
    }
  }))

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }))

  // Get our initialize service to that we can bind hooks
  const graphqlService = app.service('/graphql')

  // Set up our before hooks
  graphqlService.before(hooks.before)

  // Set up our after hooks
  graphqlService.after(hooks.after)
}
