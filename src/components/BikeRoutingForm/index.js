import React, {useCallback, useContext, useState} from 'react'
import {MapContext} from '../../context'

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
        travelMode: 'DRIVING',
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
    <form onSubmit={handleSubmit} {...props}>
      <input
        value={fromValue}
        onChange={e => setFromValue(e.target.value)}
        type="text"
      />
      <input
        value={toValue}
        onChange={e => setToValue(e.target.value)}
        type="text"
      />
      <button type="submit">route</button>
    </form>
  )
}

export default BikeRoutingForm
