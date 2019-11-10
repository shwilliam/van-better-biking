import React from 'react'

const CollisionBtn = ({icon, ...props}) => (
  <button type="button" {...props}>
    <img alt="Bike accidents" src={icon} />
  </button>
)

export default CollisionBtn
