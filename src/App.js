import React from 'react'
import Map from './components/Map'
import BikeRoutingForm from './components/BikeRoutingForm'
import OverlayToggle from './components/OverlayToggle'
import {MapContextProvider} from './context'
import './App.css'
import Weather from './components/Weather'

const App = () => (
  <MapContextProvider>
    <Map />
    <OverlayToggle
      style={{zIndex: 999, position: 'absolute', bottom: 0}}
    />
    <BikeRoutingForm style={{position: 'absolute', top: 0}} />
    {/* <Weather /> */}
  </MapContextProvider>
)

export default App
