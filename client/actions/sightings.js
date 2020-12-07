export const GET_SIGHTINGS = 'GET_SIGHTINGS'

export const getBadges = (sightings) => {
  return {
    type: GET_SIGHTINGS,
    sightings
  }
}
