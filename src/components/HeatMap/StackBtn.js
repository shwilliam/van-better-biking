import React, { useState } from 'react'
import stackImg from './assets/stack.png'
// import HeatMapContainer from './HeatMapContainer';


const StackBtn = () => {
  const [isClicked, setIsClicked] = useState(false)
  return <button className="stack-btn" onClick={() => setIsClicked(!isClicked)}><img src={stackImg} /></button>
}
export default StackBtn