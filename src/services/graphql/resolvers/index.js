import find from 'lodash/find'
import assign from 'lodash/assign'

export default function resolvers (app) {
  const Projects = app.service('projects')
  const Developers = app.service('developers')

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
        // var lastProjectId = projects[projects.length - 1].id
        // var newProject = assign(args.input, { id: lastProjectId + 1 })
        // projects.push(newProject)
        // return newProject
        var inputtedDeveloperIds = args.input.developers.map((dev) => { return dev.id })
        var relatedDevelopers = developers.filter((dev) => { return inputtedDeveloperIds.includes(dev.id) })
        return Projects.create({
          title: args.input.title,
          developers: relatedDevelopers
        }, (createdProject) => { return createdProject })
      }
    },
    Developer: {
      projects (developer) {
        return projects.filter((proj) => { return developer.projectIds.includes(proj.id) })
      }
    },
    Project: {
      developers (project) {
        return developers.filter((dev) => { return project.developersIds.includes(dev.id) })
      }
    }
  }
}
