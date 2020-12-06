exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.binary('hash')
    table.boolean('is_admin')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
