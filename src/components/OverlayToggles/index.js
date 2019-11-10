import React, {useEffect, useContext, useState} from 'react'
import {MapContext} from '../../context'
import getData from '../../utils/get-data'
import StackBtn from './StackBtn'
import RackBtn from './RackBtn'
import ThiefBtn from './ThiefBtn'
import CollisionBtn from './CollisionBtn'
import rackImgOn from './assets/rack.png'
import rackImgOff from './assets/rack--off.png'
import thiefImgOn from './assets/thief.png'
import thiefImgOff from './assets/thief--off.png'
import collisionImgOn from './assets/collision.png'
import collisionImgOff from './assets/collision--off.png'
import './styles/index.css'

const OverlayToggles = props => {
  const [isOpen, setIsOpen] = useState(false)
  const {changeHeatmap, activeHeatmapData, markers} = useContext(
    MapContext,
  )
  const [markersShowing, setMarkersShowing] = useState(true)

  useEffect(() => {
    if (!markers) return

    if (markersShowing) {
      markers.forEach(el => el.setVisible(true))
    } else {
      markers.forEach(el => el.setVisible(false))
    }
  }, [markers, markersShowing])

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
              <RackBtn
                icon={markersShowing ? rackImgOn : rackImgOff}
                onClick={() => setMarkersShowing(!markersShowing)}
              />
            </li>
            <li>
              <CollisionBtn
                icon={
                  activeHeatmapData['COLLISIONS']
                    ? collisionImgOn
                    : collisionImgOff
                }
                onClick={() =>
                  changeHeatmap('COLLISIONS', getData('COLLISIONS'))
                }
              />
            </li>
            <li>
              <ThiefBtn
                icon={
                  activeHeatmapData['THEFT']
                    ? thiefImgOn
                    : thiefImgOff
                }
                onClick={() =>
                  changeHeatmap('THEFT', getData('THEFT'))
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OverlayToggles
