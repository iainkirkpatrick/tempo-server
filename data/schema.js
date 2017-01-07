import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

const schema = `
type Person {
  id: Int!
  firstName: String
  lastName: String
}
type Project {
  id: Int!
  title: String
  people: [Person]
}

type Query {
  people: [Person]
}
`
export default makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers
})
