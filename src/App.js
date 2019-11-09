import React from 'react'
import Map from './components/Map'
import './App.css'

const App = () => (
  <Map
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{height: '100%'}} />}
    containerElement={<div style={{height: '400px'}} />}
    mapElement={<div style={{height: '100%'}} />}
  />
)

export default App
