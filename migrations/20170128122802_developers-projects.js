exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('Developers', function (table) {
    table.increments('id')
    table.string('firstName')
    table.string('lastName')
  })
  .then(() => { return knex.schema.createTableIfNotExists('Projects', function (table) {
    table.increments('id')
    table.string('title')
    table.string('client')
  })})
  .then(() => { return knex.schema.createTableIfNotExists('Developers_Projects', function (table) {
    table.increments('id')
    table.integer('DeveloperId').references('Developers.id')
    table.integer('ProjectId').references('Projects.id')
  })})
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Developers_Projects')
  .then(() => {
    return knex.schema.dropTableIfExists('Projects')
  })
  .then(() => {
    return knex.schema.dropTableIfExists('Developers')
  })
}
