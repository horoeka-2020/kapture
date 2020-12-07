exports.seed = function (knex) {
  // Inserts seed entries
  return knex('bird_sightings').insert([
    { id: 1, user_id: 1, bird_id: 1, latitude: -36.86011508905973, longitude: 174.7330772002716, date_of_sighting: '04/12/2020', time: '10:00' },
    { id: 2, user_id: 2, bird_id: 2, latitude: -36.86473673337692, longitude: 174.77575495302852, date_of_sighting: '06/12/2020', time: '12:00' },
    { id: 3, user_id: 3, bird_id: 3, latitude: -36.863652502999024, longitude: 174.7765232995797, date_of_sighting: '01/12/2020', time: '08:00' },
    { id: 4, user_id: 2, bird_id: 5, latitude: -36.863051638027024, longitude: 174.77464575331837, date_of_sighting: '02/12/2020', time: '16:00' }
  ])
}
