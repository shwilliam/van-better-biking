import React, {useContext, useState} from 'react'
import {MapContext} from '../../context'
import getData from '../../utils/get-data'
import StackBtn from './StackBtn'
import ThiefBtn from './ThiefBtn'
import RackBtn from './RackBtn'
import CollisionBtn from './CollisionBtn'
import './styles/index.css'

const toggles = [
  {dataset: 'THEFT', label: 'theft'},
  {dataset: 'COLLISIONS', label: 'collisions'},
]

const OverlayToggles = props => {
  const [isOpen, setIsOpen] = useState(false)
  const {changeHeatmap, activeHeatmapData} = useContext(MapContext)

  return (
    <div {...props}>
      <StackBtn onClick={() => setIsOpen(!isOpen)} />
      <div
        className={`layers-container ${
          isOpen ? 'layers-container--open' : ''
        }`}
      >
        <div className="heatmap-container">
          <p>Map Layers</p>
          <ul className="heatmap-list">
            <li>
              <RackBtn />
            </li>
            <li>
              <CollisionBtn />
            </li>
            <li>
              <ThiefBtn />
            </li>
          </ul>
        </div>
      </div>
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

export default OverlayToggles
