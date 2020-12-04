exports.seed = function (knex) {
  // Inserts seed entries
  return knex('user_badges').insert([
    { id: 1, user_id: 1, badges_id: 1 },
    { id: 2, user_id: 2, badges_id: 2 },
    { id: 3, user_id: 3, badges_id: 3 },
    { id: 4, user_id: 4, badges_id: 4 }
  ])
}
