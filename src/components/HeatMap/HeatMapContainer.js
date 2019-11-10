import React from 'react'
import ThiefBtn from './ThiefBtn'
import RackBtn  from './RackBtn'
import CollisionBtn from './CollisionBtn'
import './styles/index.css'
const HeatMapContainer = () => {
    
  return (
    <>
      <div className="heatmap-container">
        <span>Map Layers</span>
        <ul className="heatmap-list">
          <li><RackBtn /></li>
          <li><CollisionBtn /></li>
          <li><ThiefBtn /></li>
        </ul>
      </div>
    </>
  )
}
export default HeatMapContainer