exports.seed = function (knex) {
  // Inserts seed entries
  return knex('users').insert([
    { id: 1, username: 'kakaruia@kapture.com', hash: '######', is_admin: false },
    { id: 2, username: 'raiwhara@kapture.com', hash: '######', is_admin: false }
  ])
}
