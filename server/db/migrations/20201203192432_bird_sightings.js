
exports.up = knex => {
  return knex.schema.createTable('bird_sightings', table => {
    table.increments('id').primary()
    table.interger('user_id')
    table.interger('bird_id')
    table.interger('latitude')
    table.interger('longitude')
    table.date('date_of_sighting')
    table.time('time')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('bird_sightings')
};
