import L from 'leaflet'

export function getMap () {
  const myMap = L.map('mapid').setView([-36.8666700, 174.7666700], 12)

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapboxx/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2hlbGx5bXV0dS1ncmlnZyIsImEiOiJja2llYjJzaXExZHdhMnJydGQ4OHBlaTk5In0.ailFKRw65gUy_dTnM7tZnw'
  }).addTo(myMap)
}

getMap()
