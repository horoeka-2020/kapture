exports.seed = function (knex) {
  // Inserts seed entries
  return knex('user_badges').insert([
    { id: 1, user_id: 2, badges_id: 1 },
    { id: 2, user_id: 2, badges_id: 2 },
    { id: 3, user_id: 3, badges_id: 5 },
    { id: 4, user_id: 2, badges_id: 6 },
    { id: 5, user_id: 3, badges_id: 7 },
    { id: 6, user_id: 2, badges_id: 8 },
    { id: 7, user_id: 2, badges_id: 10 },
    { id: 8, user_id: 2, badges_id: 11 },
    { id: 9, user_id: 3, badges_id: 2 },
    { id: 10, user_id: 3, badges_id: 8 }
  ])
}
