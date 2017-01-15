import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'

import schema from '../data/schema'

const myGraphQLSchema = schema
const PORT = 3000

var app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)

console.log('Running a GraphQL API server at localhost:3000/graphql')
