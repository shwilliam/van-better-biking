import React, {useCallback, useContext, useState} from 'react'
import {MapContext} from '../../context'
import './index.css'

const BikeRoutingForm = props => {
  const {directionsService, directionsRenderer} = useContext(
    MapContext,
  )
  const [toValue, setToValue] = useState('')
  const [fromValue, setFromValue] = useState('')

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      var request = {
        origin: fromValue,
        destination: toValue,
        travelMode: 'BICYCLING',
      }
      directionsService.route(request, function(result, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(result)
        }
      })
      setToValue('')
      setFromValue('')
    },
    [fromValue, toValue, directionsRenderer, directionsService],
  )

  return (
    <form className="search-form" onSubmit={handleSubmit} {...props}>
      <input
        value={fromValue}
        onChange={e => setFromValue(e.target.value)}
        type="text"
        className="pointA"
        placeholder="From"
      />
      <input
        value={toValue}
        onChange={e => setToValue(e.target.value)}
        type="text"
        className="pointB"
        placeholder="To"
      />
      <button type="submit" hidden>
        Go
      </button>
    </form>
  )
}

export default BikeRoutingForm
