
exports.up = knex => {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('email')
    table.string('password')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};

