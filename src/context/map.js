import React, {useEffect, useState} from 'react'

const MapContext = React.createContext()

export const MapContextProvider = ({children}) => {
  const [map, setMap] = useState()

  useEffect(() => {
    // init map
  }, [])

  return (
    <MapContext.Provider value={{map, setMap}}>
      {children}
    </MapContext.Provider>
  )
}

export default MapContext
