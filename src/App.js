import React, { Component } from 'react';
import './App.css';

import services from './services/cityService';
import MapContainer  from './components/MapContainer';
import Constructions from './components/Constructions';

class App extends Component {


  getFires() {
    services.getData('Construction/Construction Services')
    .then(response => {
      let subset = response.data;
      let subset_time = subset.filter(entry => +entry.start_date.split("-")[0] > 2017);
      this.setState({fires: subset_time});
    })
    .catch(err => console.log('ERRRR ', err ));
  }


  render() {

    return (
      <div className="App">
          <Constructions />
      </div>
    );
  }
}

export default App;
