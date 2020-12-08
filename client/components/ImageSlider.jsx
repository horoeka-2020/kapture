import React from 'react'
import Carousel from 'react-material-ui-carousel'

function ImageSlider (props) {
  // const items = [
  //   {
  //     name: 'bellbird'
  //   },
  //   {
  //     name: 'brown-kiwi'
  //   },
  //   {
  //     name: 'kaka'
  //   },
  //   {
  //     name: 'kakapo'
  //   },
  //   {
  //     name: 'ruru'
  //   },
  //   {
  //     name: 'tui'
  //   }
  // ]

  return (
    <Carousel className='carousel-wrapper' autoPlay={false}>
      {
        props.birds.map((bird, i) => <Item key={i} item={bird.birdName} />)
      }
    </Carousel>
  )
}

function Item (props) {
  const imageClass = `bg-slider-img bg-slider-img-${props.birdName}`

  return (
    <div className={imageClass}>
    </div>
  )
}

export default ImageSlider
