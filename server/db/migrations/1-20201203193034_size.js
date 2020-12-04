exports.up = knex => {
  return knex.schema.createTable('size', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('height')
    table.integer('width')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('size')
}
