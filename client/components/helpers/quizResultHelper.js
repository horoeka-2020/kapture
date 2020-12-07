import { dispatch } from '../../store' // , getState
import { setWaiting, clearWaiting } from '../../actions/waiting'
import { showError } from '../../actions/error'
import { getBirdByID } from '../../api/api'

export function getSpecificBird (birdId) {
  dispatch(setWaiting())
  return getBirdByID(birdId)
    .then(bird => {
      dispatch(clearWaiting())
      const { birdName, birdIgnoa, birdDesc, birdImage, birdFoundIn, birdSound, birdCons, birdThreat, birdColourName, birdColourHex, birdSize, birdHeight, birdWidth, birdSizeId } = bird[0]
      return {
        birdName,
        birdIgnoa,
        birdDesc,
        birdImage,
        birdFoundIn,
        birdSound,
        birdCons,
        birdThreat,
        birdColourName,
        birdColourHex,
        birdSize,
        birdHeight,
        birdWidth,
        birdSizeId
      }
    })
    .catch((error) => {
      dispatch(showError(error.message))
    })
}
