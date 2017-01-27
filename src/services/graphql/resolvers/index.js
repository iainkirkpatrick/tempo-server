import find from 'lodash/find'
import assign from 'lodash/assign'

const developers = [
  { id: 1, firstName: 'Iain', lastName: 'Kirkpatrick', projectIds: [1, 2] },
  { id: 2, firstName: 'Greg', lastName: 'Kan', projectIds: [1] }
]

const projects = [
  { id: 1, title: 'FitAdvisor', developersIds: [1, 2] },
  { id: 2, title: 'Conscious Consumers', developersIds: [1] }
]

export default function resolvers (app) {
  const Projects = app.service('projects')

  return {
    Query: {
      developer (obj, args, context) {
        return find(developers, (dev) => { return dev.id === args.id })
      },
      developers () {
        return developers
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
