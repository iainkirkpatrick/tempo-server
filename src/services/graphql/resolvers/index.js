import find from 'lodash/find'
import assign from 'lodash/assign'

const people = [
  { id: 1, firstName: 'Iain', lastName: 'Kirkpatrick', projectIds: [1, 2] },
  { id: 2, firstName: 'Greg', lastName: 'Kan', projectIds: [1] }
]

const projects = [
  { id: 1, title: 'FitAdvisor', peopleIds: [1, 2] },
  { id: 2, title: 'Conscious Consumers', peopleIds: [1] }
]

const resolveFunctions = {
  Query: {
    person (obj, args, context) {
      return find(people, (person) => { return person.id === args.id })
    },
    people () {
      return people
    },
    projects () {
      return projects
    }
  },
  Mutation: {
    addProject (obj, args, context) {
      var lastProjectId = projects[projects.length - 1].id
      var newProject = assign(args.input, { id: lastProjectId + 1 })
      projects.push(newProject)
      return newProject
    }
  },
  Person: {
    projects (person) {
      return projects.filter((proj) => { return person.projectIds.includes(proj.id) })
    }
  },
  Project: {
    people (project) {
      return people.filter((person) => { return project.peopleIds.includes(person.id) })
    }
  }
}

export default resolveFunctions
