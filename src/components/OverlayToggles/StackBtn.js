import React from 'react'
import stackImg from './assets/stack.png'

const StackBtn = props => (
  <button type="button" className="stack-btn" {...props}>
    <img src={stackImg} />
  </button>
)

export default StackBtn
