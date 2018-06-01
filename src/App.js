import React, { Component } from 'react';
import './App.css';

import services from './services/cityService';
import MapContainer  from './components/MapContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    services.getData()
    .then(response => {

      let subset = response.data.filter(entry => entry.category_description === 'Construction/Construction Services');
      let subset_time = subset.filter(entry => +entry.start_date.split("-")[0] > 2016);
      this.setState({data: subset_time});
      console.log(subset_time);
  // console.log(this.state.data[100].start_date);
    })
    .catch(err => console.log('ERRRR ', err ));
  }

  render() {

    return (
      <div className="App">
        <MapContainer   google={this.props.google}
                        initialCenter={{
                          lat: 40.743792,
                          lng: -73.994566
                        }}
                        zoom={15}
                        onClick={this.onMapClicked} pins={this.state.data}/>
      </div>
    );
  }
}

export default App;
