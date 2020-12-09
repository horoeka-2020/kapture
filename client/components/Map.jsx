import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// eslint-disable-next-line no-undef
const newIcon = new L.Icon({
  iconUrl: '/images/build/bird_icon.png',
  iconRetinaUrl: '/images/build/bird_icon.png',
  iconSize: [50, 50]
})

function Map (props) {
  return (
    <div className='map'>
      <MapContainer
        center={[-36.8613163364828, 174.77405422451895]}
        zoom={15}
        scrollWheelZoom={true}>
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlbGx5bXV0dS1ncmlnZyIsImEiOiJja2llYjJzaXExZHdhMnJydGQ4OHBlaTk5In0.ailFKRw65gUy_dTnM7tZnw'/>

        {props.sightings?.map((sighting, i) => {
          return <Marker key={i} icon ={newIcon}
            position={[sighting.birdLat, sighting.birdLong]}
          >
            <Popup>
              <h3> {sighting.birdIgnoa}</h3>
              <img src={sighting.birdImage} height='100px' width='100px'></img>
              <h4>Date seen: {sighting.birdDate}</h4>
              <h4>Time seen: {sighting.birdTime}</h4>
            </Popup>
          </Marker>
        })}
        {/* {props.userCoordinates?.map(location => {
          return <Marker key={props.userCoordinates.indexOf(location)}
            position={[location.lat, location.lon]}
          >
            <Popup>
              Your Location
            </Popup>
          </Marker>
        })} */}
      </MapContainer>
    </div>
  )
}

export default Map
