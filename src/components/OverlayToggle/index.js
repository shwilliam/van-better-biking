import React, {useContext} from 'react'
import {MapContext} from '../../context'
import getData from '../../utils/get-data'

const toggles = [
  {dataset: 'THEFT', label: 'theft'},
  {dataset: 'COLLISIONS', label: 'collisions'},
]

const OverlayToggle = props => {
  const {changeHeatmap, activeHeatmapData} = useContext(MapContext)

  return (
    <div {...props}>
      {toggles.map(({dataset, label}) => (
        <button
          type="button"
          onClick={() => changeHeatmap(dataset, getData(dataset))}
          key={dataset}
        >
          {label} ({activeHeatmapData[dataset] ? 'on' : 'off'})
        </button>
      ))}
    </div>
  )
}

export default OverlayToggle
