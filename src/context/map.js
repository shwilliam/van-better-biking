import React, {useState} from 'react'

const MapContext = React.createContext()

export const MapContextProvider = ({children}) => {
  const [map, setMap] = useState()
  const [directionsRenderer, setDirectionsRenderer] = useState()
  const [directionsService, setDirectionsService] = useState()

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        directionsRenderer,
        setDirectionsRenderer,
        directionsService,
        setDirectionsService,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export default MapContext
