
exports.up = knex => {
  return knex.schema.createTable('bird_sightings', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('bird_id')
    table.integer('latitude')
    table.integer('longitude')
    table.date('date_of_sighting')
    table.time('time')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('bird_sightings')
};
