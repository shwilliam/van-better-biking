import React from 'react'
import Map from './components/Map'
import BikeRoutingForm from './components/BikeRoutingForm'
import OverlayToggles from './components/OverlayToggles'
import {MapContextProvider} from './context'
import './App.css'

const App = () => (
  <MapContextProvider>
    <OverlayToggles />
    <BikeRoutingForm
      style={{position: 'absolute', top: 0, zIndex: 999}}
    />
    <Map />
  </MapContextProvider>
)

export default App
