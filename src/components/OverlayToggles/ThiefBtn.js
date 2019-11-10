import React from 'react'

const ThiefBtn = ({icon, ...props}) => (
  <button type="button" {...props}>
    <img src={icon} />
  </button>
)

export default ThiefBtn
