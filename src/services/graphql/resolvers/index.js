export default function resolvers (app) {
  const Projects = app.service('projects')
  const Developers = app.service('developers')
  const DevelopersProjects = app.service('developersProjects')

  return {
    Query: {
      developer (obj, args, context) {
        return Developers.get(args.id)
      },
      developers () {
        return Developers.find()
      },
      project (obj, args, context) {
        return Projects.get(args.id)
      },
      projects () {
        return Projects.find()
      }
    },
    Mutation: {
      addProject (obj, args, context) {
        return Projects.create({
          title: args.input.title,
          client: args.input.client
        })
        .then((createdProject) => {
          if (args.input.developers) {
            var inputtedDeveloperIds = args.input.developers.map((dev) => { return dev.id })
            return Developers.find({ query: { id: { $in: inputtedDeveloperIds } } })
            .then((developers) => {
              return DevelopersProjects.create(developers.map((developer) => {
                return {
                  DeveloperId: developer.id,
                  ProjectId: createdProject.id
                }
              }))
            })
            .then(() => {
              return createdProject
            })
          } else {
            return createdProject
          }
        })
      }
    },
    Developer: {
      projects (developer) {
        return DevelopersProjects.find({ query: { DeveloperId: developer.id } })
        .then((rows) => {
          var projectIds = rows.map((row) => {
            return row.ProjectId
          })
          return Projects.find({ query: { id: { $in: projectIds } } })
        })
      }
    },
    Project: {
      developers (project) {
        return DevelopersProjects.find({ query: { ProjectId: project.id } })
        .then((rows) => {
          var developerIds = rows.map((row) => {
            return row.DeveloperId
          })
          return Developers.find({ query: { id: { $in: developerIds } } })
        })
      }
    }
  }
}
