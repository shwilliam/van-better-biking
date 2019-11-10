import React from 'react'

const CollisionBtn = ({icon, ...props}) => (
  <button type="button" {...props}>
    <img src={icon} />
  </button>
)

export default CollisionBtn
