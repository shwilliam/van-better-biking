/* global google */
import bikeTheft from '../data/bike-theft'
import bikeCollisions from '../data/bike-collisions'

const getBikeTheftData = () => {
  const bikeTheftData = []
  for (let d in bikeTheft) {
    bikeTheftData.push(
      new google.maps.LatLng(
        bikeTheft[d].Latitude,
        bikeTheft[d].Longitude,
      ),
    )
  }
  return bikeTheftData
}

const getBikeCollisionsData = () => {
  const bikeCollisionsData = []
  for (let d in bikeCollisions) {
    bikeCollisionsData.push(
      new google.maps.LatLng(
        bikeCollisions[d].Latitude,
        bikeCollisions[d].Longitude,
      ),
    )
  }
  return bikeCollisionsData
}

const getData = dataset => {
  const formattedData = {}

  if (!formattedData[dataset]) {
    let newData
    switch (dataset) {
      case 'THEFT':
        newData = getBikeTheftData()
        break
      case 'COLLISIONS':
        newData = getBikeCollisionsData()
        break
      default:
        break
    }
    formattedData[dataset] = newData
    return newData
  } else {
    return formattedData[dataset]
  }
}

export default getData
