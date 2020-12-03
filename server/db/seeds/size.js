
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('size').del()
    .then(function () {
      // Inserts seed entries
      return knex('size').insert([
        {id: 1, name: 'tiny', height: 5, width: 5},
        {id: 2, name: 'small', height: 10, width: 10},
        {id: 3, name: 'medium', height: 30, width: 30},
        {id: 4, name: 'large', height: 60, width: 60}
      ]);
    });
};
