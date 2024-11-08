import L, { type Map, Layer } from 'leaflet'
import markerIcon from '@/../node_modules/leaflet/dist/images/marker-icon.png'

let map: Map
let layer: Layer

export const loadMap = () => {
  map = L.map('map', {
    zoom: 14,
  })

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map)

  L.Marker.prototype.setIcon(
    L.icon({
      iconUrl: markerIcon,
    }),
  )
}

export const setMarker = (latLong: { lat: number; lng: number }) => {
  if (layer) layer.remove()

  layer = L.marker([latLong.lat, latLong.lng]).addTo(map)
  map.setView(latLong).setZoom(16)
}
