/* global google */
import React, {useState, useEffect} from 'react'
import heatmapGradient from './heatmap-gradient'

const MapContext = React.createContext()

export const MapContextProvider = ({children}) => {
  const [map, setMap] = useState()
  const [directionsRenderer, setDirectionsRenderer] = useState()
  const [directionsService, setDirectionsService] = useState()
  const [activeHeatmap, setActiveHeatmap] = useState()
  const [heatmap, setHeatmap] = useState()

  const changeHeatmap = data => {
    if (!map) return

    if (!heatmap) {
      const gHeatmap = new google.maps.visualization.HeatmapLayer({})

      gHeatmap.set(
        'gradient',
        gHeatmap.get('gradient') ? null : heatmapGradient,
      )
      gHeatmap.set('radius', gHeatmap.get('radius') ? null : 50)

      gHeatmap.setMap(map)
      setHeatmap(gHeatmap)
    }

    setActiveHeatmap(data)
  }

  useEffect(() => {
    if (!heatmap) return

    heatmap.setData([])
    setTimeout(() => {
      heatmap.setData(activeHeatmap)
    }, 0)

    heatmap.set(activeHeatmap)
  }, [heatmap, activeHeatmap])

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        directionsRenderer,
        setDirectionsRenderer,
        directionsService,
        setDirectionsService,
        changeHeatmap,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export default MapContext
