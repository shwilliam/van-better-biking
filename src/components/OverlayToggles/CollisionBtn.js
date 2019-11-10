import React from 'react'
import collisionImg from './assets/collision.png'

const CollisionBtn = props => (
  <button type="button" {...props}>
    <img src={collisionImg} />
  </button>
)

export default CollisionBtn
