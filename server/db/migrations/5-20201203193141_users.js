exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('email')
    table.binary('password')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
