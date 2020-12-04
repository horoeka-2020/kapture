exports.seed = function (knex) {
  // Inserts seed entries
  return knex('colour').insert([
    { id: 1, name: 'black', hex: '#000000', image: '' },
    { id: 2, name: 'white', hex: '#FFFFFF', image: '' },
    { id: 3, name: 'red', hex: '#DE2002', image: '' },
    { id: 4, name: 'green', hex: '#35AD05', image: '' },
    { id: 5, name: 'brown', hex: '#720C0C', image: '' }
  ])
}
