import React from 'react'

function Bird (props) {
  return (
    <>
      <h2 className='cardTitle'>{props.bird.birdIgnoa}</h2>
      <div className='flex-container'>
        <div className='birdText'>
          <img className='birdImg' src={props.bird.birdImage} ></img>
          <br></br>
          <input
            className="btn-submit-bird"
            type="submit"
            name=""
            value="Confirm"
            onClick={props.handleClick}/>
        </div>
        <div>
          <h3 name='māoriname' className='birdText'>Māori Name: {props.bird.birdIgnoa}</h3>
          <h3 name='māoriname' className='birdText'>Name: {props.bird.birdName}</h3>
          <h3 className='birdText'>Description: {props.bird.birdDesc}</h3>
          <h3 className='birdText'>Found In: {props.bird.birdFoundIn}</h3>
          <h3 className='birdText'>Conservation Status: {props.bird.birdCons}</h3>
          <h3 className='birdText'>Threats: {props.bird.birdThreat}</h3>
          <h3 className='birdText'>Main Colour: {props.bird.birdColourName}</h3>
          <h3 className='birdText'>Size: {props.bird.birdSizeName}</h3>
        </div>
      </div>
    </>
  )
}

export default Bird
