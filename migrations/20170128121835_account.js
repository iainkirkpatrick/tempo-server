exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('Accounts', function (table) {
    table.increments('id')
    table.integer('UserId').references('Users.id')
    table.string('password')
    table.string('email')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Accounts')
}
