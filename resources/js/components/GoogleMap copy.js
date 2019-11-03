import React, { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

class Map extends Component 
{
  render() 
  {
    const GoogleMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDD6AmUNDEme0dpWKSKdLembHzQ9J6-LKE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 55.8427777, lng: -4.4304389 }}
        // options={{ scrollwheel: false}}>
      >
        <MarkerWithLabel
          position={{ lat: 55.843110, lng: -4.431183 }}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "#7ad9ff", fontSize: "24px", padding: "12px", borderRadius: "10%"}}
        >
          <div>We are here!</div>
        </MarkerWithLabel>

        <Marker
          position={{ lat: 55.843110, lng: -4.431183 }}
        />
      </GoogleMap>
    )
       
    return (
        <GoogleMapComponent />
    );
  }
}
export default Map;

if (document.getElementById("map")) {
  ReactDOM.render(<Map />, document.getElementById("map"));
}
