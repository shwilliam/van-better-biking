import React from 'react'
import thiefImg from './assets/thief.png'

const ThiefBtn = props => (
  <button type="button" {...props}>
    <img src={thiefImg} />
  </button>
)

export default ThiefBtn
