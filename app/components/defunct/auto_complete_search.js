import React from 'react';
import ReactDom from 'react-dom';

class FindByLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillUpdate() {
  //   this.gmap = this.props.map;
  // }
  componentDidMount() {
    let searchLocation = document.getElementById('searchLocation');
    let options = {
      types: ['address']
    };
    let autoComplete = new google.maps.places.Autocomplete(searchLocation, options);
    this.listeners(autoComplete);
  }
  //bonus: attempt to get browser history

  listeners(autoComplete) {
    let self = this;
    autoComplete.addListener('place_changed', function() {
      let place = autoComplete.getPlace();
      autoComplete.bindTo('bounds', self.gmap);
      return place;
      //return address of place here, use this for additional api calls
    });
  }

  render() {
    return(
      <div>
        <h2>YOOOOO13O</h2>
        <div id="map" className="map"></div>
        <input id='searchLocation' placeholder='Enter your address'></input>
      </div>
    );
  }
}

export default FindByLocation;

/// in application.html.erb
// <%= javascript_include_tag "https://maps.googleapis.com/maps/api/js?key={APIKEY}" %>
