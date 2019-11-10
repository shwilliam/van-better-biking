/* global google */
import React, {useState, useEffect} from 'react'
import heatmapGradient from './heatmap-gradient'

const MapContext = React.createContext()

export const MapContextProvider = ({children}) => {
  const [map, setMap] = useState()
  const [directionsRenderer, setDirectionsRenderer] = useState()
  const [directionsService, setDirectionsService] = useState()
  const [heatmaps, setHeatmaps] = useState({})
  const [activeHeatmapData, setActiveHeatmapData] = useState({})
  const [markers, setMarkers] = useState()

  useEffect(() => {
    if (!map) return

    // set up heatmap layers
    const theftHeatmap = new google.maps.visualization.HeatmapLayer(
      {},
    )
    const collisionsHeatmap = new google.maps.visualization.HeatmapLayer(
      {},
    )

    theftHeatmap.set(
      'gradient',
      theftHeatmap.get('gradient') ? null : heatmapGradient,
    )
    theftHeatmap.set('radius', theftHeatmap.get('radius') ? null : 50)

    collisionsHeatmap.set(
      'gradient',
      collisionsHeatmap.get('gradient') ? null : heatmapGradient,
    )
    collisionsHeatmap.set(
      'radius',
      collisionsHeatmap.get('radius') ? null : 50,
    )

    theftHeatmap.setMap(map)
    collisionsHeatmap.setMap(map)

    setHeatmaps({
      THEFT: theftHeatmap,
      COLLISIONS: collisionsHeatmap,
    })
  }, [map])

  const changeHeatmap = (dataset, data) => {
    if (!map || !heatmaps) return

    if (dataset && !activeHeatmapData[dataset]) {
      setActiveHeatmapData({...activeHeatmapData, [dataset]: data})
      heatmaps[dataset].setData(data)
    } else if (dataset) {
      setActiveHeatmapData({...activeHeatmapData, [dataset]: null})
      heatmaps[dataset].setData([])
    }
  }

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
        activeHeatmapData,
        markers,
        setMarkers,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export default MapContext
