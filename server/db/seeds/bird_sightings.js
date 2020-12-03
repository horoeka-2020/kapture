
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bird_sightings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bird_sightings').insert([
        {id: 1, user_id: 1, bird_id: 1, latitude: -36.86011508905973, longitude: 174.7330772002716, date_of_sighting: '04/12/2020', time: '10:00'},
        {id: 2, user_id: 2, bird_id: 2, latitude: -36.86011508905973, longitude: 174.7330772002716, date_of_sighting: '06/12/2020', time: '12:00'}
      ]);
    });
};
