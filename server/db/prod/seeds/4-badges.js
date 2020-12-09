exports.seed = function (knex) {
  // Inserts seed entries
  return knex('badges').insert([
    { id: 1, name: 'Endemic Badge', image: '/images/badges/fantailcolour.png' },
    { id: 2, name: 'Native Badge', image: '/images/badges/silvereyecolour.png' },
    { id: 3, name: 'Introduced Badge', image: '/images/badges/goldfinch_colour.png' },
    { id: 4, name: 'Nationally Endangered Badge', image: '/images/badges/kererucolour.png' },
    { id: 5, name: 'Threatened Badge', image: '/images/badges/threatenedBadge.png' },
    { id: 6, name: 'Kiwi Badge', image: '/images/badges/kiwiBadge.png' },
    { id: 7, name: 'Large Badge', image: '/images/badges/largeBadge.png' },
    { id: 8, name: 'Medium Badge', image: '/images/badges/largeBadge.png' },
    { id: 9, name: 'Small Badge', image: '/images/badges/largeBadge.png' },
    { id: 10, name: 'Moa Badge', image: '/images/badges/largeBadge.png' },
    { id: 11, name: 'Singing Badge', image: '/images/badges/largeBadge.png' }
  ])
}
