import React from 'react'
import Map from './components/Map'
import BikeRoutingForm from './components/BikeRoutingForm'
import {MapContextProvider} from './context'
import './App.css'

const App = () => (
  <MapContextProvider>
    <Map />
    <BikeRoutingForm style={{position: 'absolute', top: 0}} />
  </MapContextProvider>
)

export default App
