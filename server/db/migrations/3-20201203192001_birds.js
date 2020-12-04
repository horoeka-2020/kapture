
exports.up = knex => {
  return knex.schema.createTable('birds', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('ignoa')
    table.text('description')
    table.string('image')
    table.string('found_in')
    table.string('sound')
    table.string('conservation_status')
    table.text('threats')
    table.integer('colour_id').references('colour.id')
    table.integer('size_id').references('size.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('birds')
};
