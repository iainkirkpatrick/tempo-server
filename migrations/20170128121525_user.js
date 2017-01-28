exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('Users', function (table) {
    table.increments('id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Users')
}
