exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', function (table) {
    table.increments('id')
    table.integer('userId').references('users.id')
    table.string('firstName')
    table.string('lastName')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
}
