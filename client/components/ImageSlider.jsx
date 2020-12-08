import React from 'react'
import Carousel from 'react-material-ui-carousel'

function ImageSlider (props) {
  return (
    <Carousel className='carousel-wrapper' autoPlay={false}>
      {
        props.birds.map((bird, i) => <Item key={i} item={bird.birdImage} />)
      }
    </Carousel>
  )
}

function Item (props) {
  const str = props.item.slice(14, props.item.length)
  const end = str.length - 4
  const bird = str.slice(0, end)
  const imageClass = `bg-slider-img bg-slider-img-${bird}`
  return (
    <div className={imageClass}>
    </div>
  )
}

export default ImageSlider
