import React, { Component } from 'react';

import services from '../services/cityService';
import MapContainer  from './MapContainer';
import ListRequests from './ListRequests';
import { Button } from 'react-bootstrap';
import './Constructions.css'


class Constructions extends Component {
    constructor() {
      super();
      this.state = {
        constructions: null
      };

      this.getConstructions.bind(this);
      this.handleClick.bind(this);
      this.renderMap.bind(this);
    }
    
    componentDidMount() {
      this.getConstructions();
    }
    
    getConstructions() {
      // services.getData('Construction/Construction Services')
      services.getList()
      .then(response => {
        const subset = response.data;
  
        let subset_time = subset.filter(entry => +entry.end_date.split("-")[0] > 2017);
        this.setState({constructions: subset_time});
        console.log("constructions", this.state.constructions)
      })
      .catch(console.error);
    }

    handleClick = () => {
      this.setState({ map: this.state.map && this.state.map === 'show' ? 'hide' : 'show' });
    }
    
    renderMap() {
      return <MapContainer google={this.props.google} 
                          initialCenter={{
                              lat: 40.743792,
                              lng: -73.994566
                          }}
                          show={this.state.map}
                          zoom={15}
                          onClick={this.onMapClicked} pins={this.state.constructions}/>;
    }

    render() {                                           
        return(
          <div>
            <Button onClick={this.handleClick}> {this.state.map === 'show' ? "Hide map" : "See on map"} </Button>
            <div>{ this.renderMap() }</div>

            <ListRequests list={this.state.constructions} />
          </div>);
    }
}

export default Constructions;