exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('TimeBlocks').del(),
    knex('Developers_Projects').del(),
    knex('Projects').del(),
    knex('Developers').del(),
    knex('Profiles').del(),
    knex('Accounts').del(),
    knex('Users').del()
  )
  .then(function () {
    return knex('Users').insert({})
  })
  .then(function () {
    return knex('Accounts').insert({ UserId: 1, password: 'asdfasdf', email: 'test@test.com' })
  })
  .then(function () {
    return knex('Profiles').insert({ UserId: 1, firstName: 'Test', lastName: 'Testerson' })
  })
  .then(function () {
    return knex('Developers').insert({ firstName: 'Test', lastName: 'Testerson' })
  })
  .then(function () {
    return knex('Projects').insert({ title: 'A Test Project', client: 'Test Consultants' })
  })
  .then(function () {
    return knex('Developers_Projects').insert({ DeveloperId: 1, ProjectId: 1 })
  })
  .then(function () {
    return knex('TimeBlocks').insert({ Developers_ProjectsId: 1, start: new Date('2017-01-23'), end: new Date('2017-01-27') })
  })
}
