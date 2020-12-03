
exports.up = knex => {
  return knex.schema.createTable('user_badges', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('badges_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_badges')
};

