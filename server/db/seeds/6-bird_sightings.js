exports.seed = function (knex) {
  // Inserts seed entries
  return knex('bird_sightings').insert([
    { id: 1, user_id: 2, bird_id: 2, latitude: -36.86075837230193, longitude: 174.77430096271627, date_of_sighting: '04/12/2020', time: '10:00' },
    { id: 2, user_id: 2, bird_id: 8, latitude: -36.86067257714914, longitude: 174.7721981428884, date_of_sighting: '06/12/2020', time: '12:00' },
    { id: 3, user_id: 3, bird_id: 3, latitude: -36.86429494226832, longitude: 174.78913351831793, date_of_sighting: '01/12/2020', time: '08:00' },
    { id: 4, user_id: 2, bird_id: 12, latitude: -36.86075837230193, longitude: 174.77430096271627, date_of_sighting: '04/12/2020', time: '10:00' },
    { id: 5, user_id: 3, bird_id: 19, latitude: -36.865358890025554, longitude: 174.79531343190234, date_of_sighting: '04/12/2020', time: '10:00' },
    { id: 6, user_id: 2, bird_id: 5, latitude: -36.863051638027024, longitude: 174.77464575331837, date_of_sighting: '02/12/2020', time: '16:00' }
  ])
}
