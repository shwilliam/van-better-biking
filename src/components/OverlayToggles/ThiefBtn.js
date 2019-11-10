import React from 'react'

const ThiefBtn = ({icon, ...props}) => (
  <button type="button" {...props}>
    <img alt="Crime" src={icon} />
  </button>
)

export default ThiefBtn
