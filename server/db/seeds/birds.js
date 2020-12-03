
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('birds').del()
    .then(function () {
      // Inserts seed entries
      return knex('birds').insert([
        {id: 1, name: 'Parson Bird', ignoa: 'Tūī', description: 'Tūī are unique to New Zealand and belong to the honeyeater family, which means they feed mainly on nectar from flowers of native plants.', image: '/images/tui.jpg', found_in: 'North, South and Stewart Islands, and their offshore islands', sound: '', conservation_status: 'Not Threatened', threats: 'Predation, habitat loss', colour_id: '', size_id: ''},
        {id: 2, name: 'Bellbird', ignoa: 'Korimako', description: 'The melodious bellbird is still widespread but mammalian predators keep their numbers low.', image: '/images/bellbird.jpg', found_in: 'North, South, Stewart and Auckland Islands and many offshore islands', sound: '', conservation_status: 'Not Threatened', threats: 'Predation', colour_id: '', size_id: ''},
        {id: 3, name: 'Brown Kiwi', ignoa: 'Kiwi', description: 'The melodious bellbird is still widespread but mammalian predators keep their numbers low.', image: '/images/bellbird.jpg', found_in: 'North, South, Stewart and Auckland Islands and many offshore islands', sound: '', conservation_status: 'Not Threatened', threats: 'Predation', colour_id: '', size_id: ''}
      ]);
    });
};
