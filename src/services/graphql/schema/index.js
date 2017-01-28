export default `
  type Developer {
    id: Int
    firstName: String
    lastName: String
    projects: [Project]
  }
  input DeveloperInput {
    id: Int
    firstName: String
    lastName: String
    projects: [ProjectInput]
  }

  type Project {
    id: Int
    title: String
    client: String
    developers: [Developer]
  }
  input ProjectInput {
    id: Int
    title: String
    client: String
    developers: [DeveloperInput]
  }

  type Query {
    developer(id: Int): Developer
    developers: [Developer]
    project(id: Int): Project
    projects: [Project]
  }

  type Mutation {
    addProject(input: ProjectInput): Project
  }
`
