
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([
    {id: 1, email: 'shellymutugrigg@gmail.com', password: '123'},
    {id: 2, email: 'rodrigohdiaz@gmail.com', password: '123'},
    {id: 3, email: 'web-dev-steel@gmail.com', password: '123'},
    {id: 4, email: 'bootcamp@kittisanpuangkum.com', password: '123'}
  ])
}
