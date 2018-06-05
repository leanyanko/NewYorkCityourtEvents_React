import React, { Component } from 'react';
import classNames from 'classnames';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleMapsClient } from '@google/maps';
import './MapContainer.css';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      googleMapsClient: require('@google/maps').createClient({
        key: 'AIzaSyB5DoqbsI9SXZiZexLfN1oJq6z-KrWBr7s',
        Promise: Promise
      })
    };

    this.getPins.bind(this);
    this.renderMarkers.bind(this);
  }

  componentWillUpdate(nextProps) {
    // set pins only one time
    if (!this.state.pins && nextProps.pins) {
      this.getPins(nextProps.pins);
    }
  }

  /**
   * Get latitude and longitude from google maps service.
   * @param {*} pins 
   */
  getPins(pins) {
    const tempPins = [];
    pins.forEach(pin => {
      if (!pin.address_to_request) return;

      this.state.googleMapsClient.geocode({address:  pin.address_to_request})
      .asPromise()
      .then((response) => tempPins.push(response.json.results[0].geometry.location))
      .then(() => this.setState({ pins: tempPins }))
      .catch(console.error);
  });
  }

  renderMarkers() {
    return this.state.pins.map((location, i) => <Marker key={i} position={location} />);
  }

  render() {
    return (
      <div className={classNames({'map-container': true, show: this.props.show === 'show', hide: this.props.show === 'hide'})}>
        <Map google={this.props.google} zoom={14} initialCenter={this.props.initialCenter} className={'map'}>
          { this.state.pins ? this.renderMarkers() : null }
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
 // apiKey: ('AIzaSyAq-g7tq3wnCbDeA_LawIl3yshGDCbHw3s')
 apiKey: ('AIzaSyB5DoqbsI9SXZiZexLfN1oJq6z-KrWBr7s')
})(MapContainer)


//AIzaSyB5DoqbsI9SXZiZexLfN1oJq6z-KrWBr7s