/* global google */
import React, {useContext, useLayoutEffect} from 'react'
import {MapContext} from '../../context'
import './index.css'
import bikeRacks from '../../data/bike-racks'

const Map = props => {
  const {
    map,
    setMap,
    setDirectionsRenderer,
    setDirectionsService,
  } = useContext(MapContext)

  useLayoutEffect(() => {
    if (map) return

    const gmap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.279652, lng: -123.126151},
      zoom: 15,
      styles: [
        // {
        //   elementType: 'geometry',
        //   stylers: [
        //     {
        //       color: '#ebe3cd',
        //     },
        //   ],
        // },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#523735',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#f5f1e6',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#c9b2a6',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#dcd2be',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ae9e90',
            },
          ],
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#93817c',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#a5b076',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#447530',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#fdfcf8',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f8c967',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#e9bc62',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e98d58',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#db8555',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#806b63',
            },
          ],
        },
        {
          featureType: 'transit',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8f7d77',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#ebe3cd',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#b9d3c2',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#92998d',
            },
          ],
        },
      ],
    })
    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: 'red',
      },
    })
    const infowindow = new google.maps.InfoWindow()

    const bikeLayer = new google.maps.BicyclingLayer()
    bikeLayer.setMap(gmap)

    directionsRenderer.setMap(gmap)

    setDirectionsRenderer(directionsRenderer)
    setDirectionsService(directionsService)

    setMap(gmap)

    let rackImage = {
      url:
        'https://user-images.githubusercontent.com/49115258/68539322-8b652380-0336-11ea-8a9c-f30411e2eba3.png',
      size: new google.maps.Size(20, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32),
    }

    bikeRacks.forEach(rack => {
      if (!rack.coords) return
      const marker = new google.maps.Marker({
        position: rack.coords,
        map: gmap,
        title: String(rack.fields.number_of_racks),
        icon: rackImage,
      })
      google.maps.event.addListener(
        marker,
        'click',
        (function(marker) {
          return function() {
            infowindow.setContent(
              String(rack.fields.number_of_racks || 0),
            )
            infowindow.open(map, marker)
          }
        })(marker),
      )
    })
  }, [map, setMap, setDirectionsService, setDirectionsRenderer])

  return (
    <div
      id="map"
      style={{position: 'absolute', top: 0, left: 0, right: 0}}
      {...props}
    />
  )
}

export default Map
