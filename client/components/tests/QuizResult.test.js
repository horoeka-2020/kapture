import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import QuizResult from '../QuizResult'
import { getSpecificBird } from '../helpers/quizResultHelper'
import { renderWithRedux } from '../../test-utils'

jest.mock('./quizResultHelper')

test('calls getSpecificBird and renders bird data on mount', () => {
  getSpecificBird.mockImplementation(() => Promise.resolve({
    birdName: 'test bird',
    birdIgnoa: 'manu',
    birdDesc: 'bird',
    birdImage: 'img',
    birdFoundIn: 'found',
    birdSound: '',
    birdCons: 'status',
    birdThreat: 'threat',
    birdColourName: 'rainbow',
    birdColourHex: '#ffffff',
    birdSize: 2,
    birdHeight: 10,
    birdWidth: 10,
    birdSizeId: 2
  }))
  renderWithRedux(<QuizResult />)
  return screen.findByRole('heading', { name: 'Māori Name:' })
    .then((title) => {
      expect(title).toHaveTextContent('Māori Name:')
      return null
    })
})
