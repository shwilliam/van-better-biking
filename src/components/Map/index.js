/* global google */
import React, {useContext, useLayoutEffect} from 'react'
import {MapContext} from '../../context'
import theftData from '../../data/theft'
import './index.css'

const Map = props => {
  const {map, setMap} = useContext(MapContext)

  useLayoutEffect(() => {
    if (map) return

    const gmap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
    })

    const bikeLayer = new google.maps.BicyclingLayer()
    bikeLayer.setMap(gmap)

    setMap(gmap)

    let heatmapData = [
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207),
      new google.maps.LatLng(49.2827, -123.1207)
    ]

    var gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ]

    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData
    })
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    heatmap.set('radius', heatmap.get('radius') ? null : 50)

    
  
    heatmap.setMap(gmap)
  }, [map, setMap])

  return (
    <div
      id="map"
      style={{position: 'absolute', top: 0, left: 0, right: 0}}
      {...props}
    />
  )
}

export default Map
