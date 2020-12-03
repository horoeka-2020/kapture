
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('badges').del()
    .then(function () {
      // Inserts seed entries
      return knex('badges').insert([
        {id: 1, name: 'Endemic'},
        {id: 2, name: 'Native'},
        {id: 3, name: 'Introduced'},
        {id: 4, name: 'Nationally Endangered'}
      ]);
    });
};
