import React, {useCallback, useContext, useState} from 'react'
import {MapContext} from '../../context'
import styled from 'styled-components'

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

    const RouteButton = styled.button`
      display: none;
    `;

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
      <RouteButton>submit</RouteButton>
    </form>
  )
}

export default BikeRoutingForm
