import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GoogleMapsClient} from '@google/maps';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pins: [],
      markers: null,
      inrender: true
    }

    this.renderPins.bind(this);
  }



renderPins() {

  var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAq-g7tq3wnCbDeA_LawIl3yshGDCbHw3s',
    Promise: Promise
  });

  let tmp = [];

      this.props.pins.forEach(pin => {  
        if (!pin.address_to_request) return; 
        googleMapsClient.geocode({address:  pin.address_to_request})
        .asPromise()
        .then((response) => {
          tmp.push(response.json.results[0].geometry.location);
          // console.log(response.json.results[0].geometry.location);
       //   this.state.pins.push(<Marker position={response.json.results[0].geometry.location} />);
          // return <Marker position={response.json.results[0].geometry.location} />
        })
        .then(() => {
          this.setState({pins: tmp , inrender: false})
        })
      .catch((err) => {
        console.log(err);
      });
    });
  
  console.log('new pins ', this.state.pins);

}

  render() {
      if(this.props.pins) {
        if(this.state.inrender) {
          this.renderPins();
        }
      }
      console.log("data from app ", this.state.pins);
      const marker = this.state.pins.map((location) => {
        return <Marker position={location} />
      })
     
  
      let pos = {
        lat: 40.712804,
        lng: -74.010719
      };

    return (
       <Map google={this.props.google} zoom={14} initialCenter={this.props.initialCenter}>
        {/* {this.state.pins} */}
        {marker}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAq-g7tq3wnCbDeA_LawIl3yshGDCbHw3s')
})(MapContainer)
