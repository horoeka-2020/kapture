const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('users')
    .del()
    .then(() => Promise.all([
      generateHash('admin'),
      generateHash('member')
    ]))
    .then(([adminHash, memberHash]) =>
      knex('users').insert([
        { id: 1, username: 'this@email.com', hash: memberHash, is_admin: false }
      ])
    )
}
