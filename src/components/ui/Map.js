import React from 'react'
import {compose, withProps, lifecycle, withHandlers} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import {MarkerClusterer} from 'react-google-maps/lib/components/addons/MarkerClusterer'
import {GOOGLE_MAPS_API_URL} from '../../constants'

const MapComponent = compose(
  withProps({
    googleMapURL: GOOGLE_MAPS_API_URL,
    loadingElement: <div style={{height: '100%', width: '50%'}}/>,
    containerElement: <div style={{height: 250}}/>,
    mapElement: <div id="map" style={{height: '100%'}}/>
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log('Current clicked markers length: ' + clickedMarkers.length)
    },
  }),
  lifecycle({
    componentWillMount() {
      const {data} = this.props

      this.setState({
        zoomToMarkers: map => {
          const bounds = new window.google.maps.LatLngBounds()

          for (let i = 0; i < data.length; i++) {
            if (data[i].node.coordinates) {
              const loc = new window.google.maps.LatLng(data[i].node.coordinates)
              bounds.extend(loc)
            }
          }
          map && map.fitBounds(bounds)
        },
      })
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  if (props.data) {
    return (
      <div>
        <GoogleMap
          ref={props.zoomToMarkers}
          defaultZoom={8}
          defaultCenter={{lat: 29.7368233, lng: -95.513883}}
        >
          <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={15}
          >
            {
              props.data.map(marker => (


                  <Marker
                    key={marker.node.id}
                    position={marker.node.coordinates}
                    // label={marker.label}
                    onClick={e => window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.node.coordinates.lat + ',' + marker.node.coordinates.lng, '_blank')}
                  />



              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </div>
    )
  } else {
    return (
      <div>
        <GoogleMap
          defaultZoom={13}
          // defaultCenter={props.data[0].coordinates}
          defaultCenter={{lat: 29.7368233, lng: -95.513883}}
        >
          <Marker
            // position={props.data[0].coordinates}
            // label={props.data[0].label}
            // onClick={e => window.open('https://www.google.com/maps/dir/?api=1&destination=' + props.data[0].coordinates.lat + ',' + props.data[0].coordinates.lng, '_blank')}
            position={{lat: 29.7368233, lng: -95.513883}}
          />
        </GoogleMap>

      </div>
    )
  }
})

const Map = (props) => {

  return (

    <MapComponent data={props.data}/>

  )
}

export default Map