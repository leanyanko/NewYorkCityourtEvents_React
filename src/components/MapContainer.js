import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GoogleMapsClient} from '@google/maps';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pins: [],
      markers: null
    }

    this.renderPins.bind(this);
  }


renderPins() {
  var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAq-g7tq3wnCbDeA_LawIl3yshGDCbHw3s',
    Promise: Promise
  });
 let markers = this.props.pins.map(pin => {   
    // googleMapsClient.geocode({
    //   address: pin.address_to_request
    // }, function(err, response) {
    //      console.log("rendered ", response.json.results[0].geometry.location);
    //   return <Marker position={response.json.results[0].geometry.location} />
    // });
    googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
    .asPromise()
    .then((response) => {
      console.log(response.json.results);
      this.state.pins.push(<Marker position={response.json.results[0].geometry.location} />);
      return <Marker position={response.json.results[0].geometry.location} />
  })
  .catch((err) => {
    console.log(err);
  });
  });

 return markers;
}

  render() {
      console.log("data from app ", this.state.pins);
    //  this.state.marker = (<Marker onClick={this.onMarkerClick} name={'Current location'} />);

   //   let pins = this.props.pins.f
   let tmp;
  if (this.props.pins) 
     this.renderPins();
  
      let pos = {
        lat: 40.712804,
        lng: -74.010719
      };

    return (
       <Map google={this.props.google} zoom={14} initialCenter={this.props.initialCenter}>
        
        {tmp}
        {this.state.pins}

       {/* {this.state.markers} */}
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAq-g7tq3wnCbDeA_LawIl3yshGDCbHw3s')
})(MapContainer)

// MapContainer.propTypes = {
//     google: React.PropTypes.object,
//     zoom: React.PropTypes.number,
//     initialCenter: React.PropTypes.object
//   }