import { dispatch } from '../../store' // , getState
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { getBirdByID, getBirdsByColourAndSize } from '../../api/birds'

export function getSpecificBird (birdId) {
  dispatch(setWaiting())
  return getBirdByID(birdId)
    .then(bird => {
      dispatch(clearWaiting())
      const { birdName, birdIgnoa, birdDesc, birdImage, birdFoundIn, birdSound, birdCons, birdThreat, birdColourId, birdColourName, birdColourHex, birdSize, birdHeight, birdWidth, birdSizeName } = bird[0]
      return {
        birdName,
        birdIgnoa,
        birdDesc,
        birdImage,
        birdFoundIn,
        birdSound,
        birdCons,
        birdThreat,
        birdColourId,
        birdColourName,
        birdColourHex,
        birdSize,
        birdHeight,
        birdWidth,
        birdSizeName
      }
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}

export function getBirds (colour, size) {
  dispatch(setWaiting())
  return getBirdsByColourAndSize(colour, size)
    .then(birds => {
      dispatch(clearWaiting())
      return birds
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
