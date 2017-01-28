exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('TimeBlocks', function (table) {
    table.increments('id')
    table.integer('Developers_ProjectsId').references('Developers_Projects.id')
    table.dateTime('start')
    table.dateTime('end')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('TimeBlocks')
}
