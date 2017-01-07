const people = [
  { id: 1, firstName: 'Iain', lastName: 'Kirkpatrick' },
  { id: 2, firstName: 'Greg', lastName: 'Kan' }
]

const resolveFunctions = {
  Query: {
    people () {
      return people
    }
  }
}

export default resolveFunctions
