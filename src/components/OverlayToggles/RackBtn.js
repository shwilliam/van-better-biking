import React from 'react'
import rackImg from './assets/rack.png'

const Rack = props => (
  <button type="button" {...props}>
    <img src={rackImg} />
  </button>
)

export default Rack
