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
        { id: 1, username: 'shellymutugrigg@gmail.com', hash: memberHash, is_admin: false },
        { id: 2, username: 'rodrigohdiaz@gmail.com', hash: memberHash, is_admin: false },
        { id: 3, username: 'web-dev-steel@gmail.com', hash: adminHash, is_admin: true },
        { id: 4, username: 'bootcamp@kittisanpuangkum.com', hash: memberHash, is_admin: false }
      ])
    )
}
