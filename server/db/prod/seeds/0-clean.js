
exports.seed = knex => {
  const empty = (table) =>
    () => knex(table).del()

  return empty('user_badges')()
  .then(empty('bird_sightings'))
  .then(empty('users'))
  .then(empty('badges'))
  .then(empty('birds'))
  .then(empty('colour'))
  .then(empty('size'))
}