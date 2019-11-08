/*global mapboxgl*/

import React, {useEffect} from 'react'
import './index.css'

const App = () => {
  useEffect(() => {
    mapboxgl.accessToken = `pk.${process.env.REACT_APP_MAPBOX_KEY}`
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-122.662323, 45.523751], // starting position
      zoom: 12,
    })
    // set the bounds of the map
    const bounds = [
      [-123.069003, 45.395273],
      [-122.303707, 45.612333],
    ]
    map.setMaxBounds(bounds)

    // initialize the map canvas to interact with later
    const canvas = map.getCanvasContainer()

    // an arbitrary start will always be the same
    // only the end or destination will change
    const start = [-122.662323, 45.523751]
  }, [])
  return <div id="map"></div>
}

export default App
