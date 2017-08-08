import React from 'react';
import ReactDOM from 'react-dom';

class ComboMapSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lng: null,
      lat: null
    };
  }

  componentDidUpdate() {
    let self = this;
    const geocoder = new google.maps.Geocoder;

    geocoder.geocode({'location': this.state}, function(results, status) {
       if (status === 'OK') {
         if (results[1]) {
           self.searchLocation.value = results[1].formatted_address;
         } else {
           window.alert('No results found');
         }
       } else {
         window.alert('Geocoder failed due to: ' + status);
       }
     });
  }

  getLocation() {
    let self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      self.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude});
      }, (error) => alert(error.message) );
  }


  componentDidMount() {
    let searchLocation = this.searchLocation;
    let options = {
      types: ['address']
    };

    let autoComplete = new google.maps.places.Autocomplete(searchLocation, options);
    this.searchLocation = document.getElementById('searchLocation');
    this.getLocation();
    this.listeners(autoComplete);
  }

  listeners(autoComplete){
    let self = this;

    autoComplete.addListener('place_changed', function() {
      let place = autoComplete.getPlace();
      const long = place.geometry.viewport["b"]["b"];
      const latt = place.geometry.viewport["f"]["b"];
      var pos = {lat: latt, lng: long};
      const mapOptions = {
        center: pos, // this SF
        zoom: 14
      };
    });
  }

  render() {
    return (
      <div>
        <input id='searchLocation' placeholder='Enter your address'></input>
      </div>
    );
  }

}
export default ComboMapSearch;
