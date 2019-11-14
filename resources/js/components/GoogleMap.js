import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
// import mapStyles from "../mapStyles";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

class Map extends Component 
{
  render() 
  {
    function Map() 
    {
      return (
        <GoogleMap
          defaultZoom={16}
          defaultCenter={{ lat: 55.9459745, lng: -3.2094916 }}
          // defaultOptions={{ styles: mapStyles }}
        >
            <MarkerWithLabel
              position={{ lat: 55.946030, lng: -3.209921 }}
              labelAnchor={new google.maps.Point(0, 0)}
              labelStyle={{backgroundColor: "#7ad9ff", fontSize: "24px", padding: "12px", borderRadius: "10%"}}
            >
              <div>We are here!</div>
            </MarkerWithLabel>
        </GoogleMap>
      );
    }

    const MapWrapped = withScriptjs(withGoogleMap(Map));

    return (
      <div style={{ width: "100%", height: "400px" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDD6AmUNDEme0dpWKSKdLembHzQ9J6-LKE`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;

if (document.getElementById("map")) {
  ReactDOM.render(<Map />, document.getElementById("map"));
}