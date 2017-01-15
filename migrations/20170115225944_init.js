exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('developers', function (table) {
    table.increments('id')
    table.string('firstName')
    table.string('lastName')
  })
  .then(() => { return knex.schema.createTableIfNotExists('projects', function (table) {
    table.increments('id')
    table.string('title')
  })})
  .then(() => { return knex.schema.createTableIfNotExists('developers_projects', function (table) {
    table.increments('id')
    table.integer('developerId').references('developers.id')
    table.integer('projectId').references('projects.id')
  })})
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
  .then(() => {
    return knex.schema.dropTableIfExists('projects')
  })
  .then(() => {
    return knex.schema.dropTableIfExists('developers')
  })
}
