import React from 'react'

const Rack = ({icon, ...props}) => (
  <button type="button" {...props}>
    <img alt="Bike racks" src={icon} />
  </button>
)

export default Rack
