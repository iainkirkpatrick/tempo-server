import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

const schema = `
type Person {
  id: Int
  firstName: String
  lastName: String
  projects: [Project]
}
type Project {
  id: Int
  title: String
  people: [Person]
}

type Query {
  person(id: Int): Person
  people: [Person]
  projects: [Project]
}
`
export default makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers
})
