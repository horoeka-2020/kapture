import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map (props) {
  return (
    <div className='column'>
      <MapContainer
        center={[-36.8666700, 174.7666700]}
        zoom={11}
        scrollWheelZoom={true}>
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hlbGx5bXV0dS1ncmlnZyIsImEiOiJja2llYjJzaXExZHdhMnJydGQ4OHBlaTk5In0.ailFKRw65gUy_dTnM7tZnw'/>
        {props.sightings?.map((location, i) => {
          return <Marker key={i}
            position={[location.latitude, location.longitude]}
          >
            <Popup>
              {location.date_of_sighting}
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
