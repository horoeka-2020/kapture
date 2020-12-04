exports.up = knex => {
  return knex.schema.createTable('colour', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('hex')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('colour')
}
