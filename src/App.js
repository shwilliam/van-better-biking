import React from 'react'
import Map from './components/Map'
import BikeRoutingForm from './components/BikeRoutingForm'
import {
  MapContextProvider,
  BikeRoutingContextProvider,
} from './context'
import './App.css'

const App = () => (
  <MapContextProvider>
    <BikeRoutingContextProvider>
      <Map />
      <BikeRoutingForm style={{position: 'absolute', top: 0}} />
    </BikeRoutingContextProvider>
  </MapContextProvider>
)

export default App
