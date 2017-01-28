exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('Profiles', function (table) {
    table.increments('id')
    table.integer('UserId').references('Users.id')
    table.string('firstName')
    table.string('lastName')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Profiles')
}
