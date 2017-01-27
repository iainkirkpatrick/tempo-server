exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
