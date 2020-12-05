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
        { id: 1, email: 'shellymutugrigg@gmail.com', password: memberHash },
        { id: 2, email: 'rodrigohdiaz@gmail.com', password: memberHash },
        { id: 3, email: 'web-dev-steel@gmail.com', password: adminHash },
        { id: 4, email: 'bootcamp@kittisanpuangkum.com', password: memberHash }
      ])
    )
}
