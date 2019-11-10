import React from 'react'

const Rack = ({icon, ...props}) => (
  <button type="button" {...props}>
    <img src={icon} />
  </button>
)

export default Rack
