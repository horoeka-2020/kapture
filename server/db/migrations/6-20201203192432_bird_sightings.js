exports.up = knex => {
  return knex.schema.createTable('bird_sightings', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('bird_id').references('birds.id')
    table.real('latitude')
    table.real('longitude')
    table.date('date_of_sighting')
    table.time('time')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('bird_sightings')
}
