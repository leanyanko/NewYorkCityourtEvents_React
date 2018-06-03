import React, { Component } from 'react';

import services from '../services/cityService';
import MapContainer  from './MapContainer';



class Constructions extends Component {
    constructor() {
        super();
    
        this.state = {
          constructions: null
        }
      }
    
      componentDidMount() {
        this.getConstructions();
      }
    
      getConstructions() {
       // services.getData('Construction/Construction Services')
       services.getList()
        .then(response => {
          let subset = response.data;
    
          console.log(subset);
          let subset_time = subset.filter(entry => +entry.end_date.split("-")[0] > 2017);
          this.setState({constructions: subset_time});
          console.log("constructions", this.state.constructions)
        })
        .catch(err => console.log('ERRRR ', err ));
      }

    render() {
        return(<MapContainer   google={this.props.google}
                    initialCenter={{
                    lat: 40.743792,
                    lng: -73.994566
                    }}
                    zoom={15}
                    onClick={this.onMapClicked} pins={this.state.constructions}/>);
    }
}

export default Constructions;