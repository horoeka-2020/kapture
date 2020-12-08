import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map (props) {
  console.log('Map.jsx > sightings:', props.sightings)
  return (
    <div className='map'>
      <MapContainer
        center={[-36.862413206729904, 174.7755062944385]}
        zoom={17}
        scrollWheelZoom={true}>
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlbGx5bXV0dS1ncmlnZyIsImEiOiJja2llYjJzaXExZHdhMnJydGQ4OHBlaTk5In0.ailFKRw65gUy_dTnM7tZnw'/>

        {props.sightings?.map((sighting, i) => {
          return <Marker key={i}
            position={[sighting.birdLat, sighting.birdLong]}
          >
            <Popup>
              {sighting.birdIgnoa}
              {sighting.date_of_sighting}
              {sighting.birdDate}
              {sighting.birdTime}
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
