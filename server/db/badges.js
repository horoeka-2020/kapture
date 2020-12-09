const connection = require('./connection')

function addUserBadges (userId, badgeId, db = connection) {
  return db('user_badges')
    .insert({
      user_id: Number(userId),
      badges_id: Number(badgeId)
    })
}

module.exports = {
  addUserBadges
}
