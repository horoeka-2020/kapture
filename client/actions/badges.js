export const GET_BADGES = 'GET_BADGES'

export const getBadges = (badges) => {
  return {
    type: GET_BADGES,
    badges
  }
}
