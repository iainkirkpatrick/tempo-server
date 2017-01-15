export default `
  type Developer {
    id: Int
    firstName: String
    lastName: String
    projects: [Project]
  }
  input DeveloperInput {
    firstName: String
    lastName: String
    projects: [ProjectInput]
  }

  type Project {
    id: Int
    title: String
    developers: [Developer]
  }
  input ProjectInput {
    title: String
    developers: [DeveloperInput]
  }

  type Query {
    developer(id: Int): Developer
    developers: [Developer]
    projects: [Project]
  }

  type Mutation {
    addProject(input: ProjectInput): Project
  }
`
