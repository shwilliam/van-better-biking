import React, {useCallback, useState} from 'react'

const BikeRoutingForm = props => {
  const [toValue, setToValue] = useState('')
  const [fromValue, setFromValue] = useState('')

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      console.log(toValue, fromValue)
      // get coordinates of address
      // get route
      // cache in context
      setToValue('')
      setFromValue('')
    },
    [fromValue, toValue],
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
