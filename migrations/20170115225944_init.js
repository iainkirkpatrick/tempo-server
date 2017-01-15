exports.up = function (knex, Promise) {
  var migrateProjects = knex.schema.createTableIfNotExists('projects', function (table) {
    table.increments('id')
    table.string('title')
    table.integer('developerId').references('developers.id')
  })
  var migrateDevelopers = knex.schema.createTableIfNotExists('developers', function (table) {
    table.increments('id')
    table.string('firstName')
    table.string('lastName')
    table.integer('projectId').references('projects.id')
  })

  return Promise.all([
    migrateProjects,
    migrateDevelopers
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('projects'),
    knex.schema.dropTableIfExists('developers')
  ])
}
