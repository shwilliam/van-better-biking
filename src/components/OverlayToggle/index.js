/* global google */
import React, {useContext} from 'react'
import {MapContext} from '../../context'
import bikeTheft from '../../bike-theft'
import bikeCollisions from '../../bike-collisions'

const getBikeTheftData = () => {
  const bikeTheftData = []
  for (let d in bikeTheft) {
    bikeTheftData.push(
      new google.maps.LatLng(
        bikeTheft[d].Latitude,
        bikeTheft[d].Longitude,
      ),
    )
  }
  return bikeTheftData
}

const getBikeCollisionsData = () => {
  const bikeCollisionsData = []
  for (let d in bikeCollisions) {
    bikeCollisionsData.push(
      new google.maps.LatLng(
        bikeCollisions[d].Latitude,
        bikeCollisions[d].Longitude,
      ),
    )
  }
  return bikeCollisionsData
}

const getData = dataset => {
  const formattedData = {}

  if (!formattedData[dataset]) {
    let newData
    switch (dataset) {
      case 'THEFT':
        newData = getBikeTheftData()
        break
      case 'COLLISIONS':
        newData = getBikeCollisionsData()
        break
      default:
        break
    }
    formattedData[dataset] = newData
    return newData
  } else {
    return formattedData[dataset]
  }
}

const toggles = [
  {dataset: 'THEFT', label: 'theft'},
  {dataset: 'COLLISIONS', label: 'collisions'},
]

const OverlayToggle = ({...props}) => {
  const {changeHeatmap} = useContext(MapContext)

  return (
    <div {...props}>
      {toggles.map(({dataset, label}) => (
        <button
          type="button"
          onClick={() => changeHeatmap(getData(dataset))}
          key={dataset}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default OverlayToggle
