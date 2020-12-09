exports.seed = function (knex) {
  // Inserts seed entries
  return knex('user_badges').insert([
    { id: 1, user_id: 2, badges_id: 1 },
    { id: 2, user_id: 2, badges_id: 2 },
    { id: 3, user_id: 3, badges_id: 3 },
    { id: 4, user_id: 3, badges_id: 4 },
    { id: 5, user_id: 3, badges_id: 5 },
    { id: 6, user_id: 4, badges_id: 6 },
    { id: 7, user_id: 4, badges_id: 7 },
    { id: 8, user_id: 4, badges_id: 8 },
    { id: 9, user_id: 3, badges_id: 9 },
    { id: 10, user_id: 3, badges_id: 10 },
    { id: 11, user_id: 3, badges_id: 11 },
    { id: 12, user_id: 3, badges_id: 2 },
    { id: 13, user_id: 3, badges_id: 8 }
  ])
}
