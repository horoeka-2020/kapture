exports.seed = function (knex) {
  // Inserts seed entries
  return knex('badges').insert([
    { id: 1, name: 'Endemic', image: '/images/badges/fantailcolour.png' },
    { id: 2, name: 'Native', image: '/images/badges/silvereyecolour.png' },
    { id: 3, name: 'Introduced', image: '/images/badges/goldfinch_colour.png' },
    { id: 4, name: 'Nationally Endangered', image: '/images/badges/kererucolour.png' }
  ])
}
