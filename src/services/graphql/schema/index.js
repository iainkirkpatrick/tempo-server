export default `
  type Person {
    id: Int
    firstName: String
    lastName: String
    projects: [Project]
  }
  input PersonInput {
    firstName: String
    lastName: String
    projects: [ProjectInput]
  }

  type Project {
    id: Int
    title: String
    people: [Person]
  }
  input ProjectInput {
    title: String
    people: [PersonInput]
  }

  type Query {
    person(id: Int): Person
    people: [Person]
    projects: [Project]
  }

  type Mutation {
    addProject(input: ProjectInput): Project
  }
`
