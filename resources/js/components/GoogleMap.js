import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
// import * as parkData from "./data/skateboard-parks.json";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

class Map extends Component 
{
  render() 
  {
    function Map() 
    {
      // const [selectedPark, setSelectedPark] = useState(null);

      // useEffect(() => {
      //   const listener = e => {
      //     if (e.key === "Escape") {
      //       setSelectedPark(null);
      //     }
      //   };
      //   window.addEventListener("keydown", listener);

      //   return () => {
      //     window.removeEventListener("keydown", listener);
      //   };
      // }, []);

      return (
        <GoogleMap
          defaultZoom={16}
          defaultCenter={{ lat: 55.8427777, lng: -4.4304389 }}
          defaultOptions={{ styles: mapStyles }}
        >
            <MarkerWithLabel
              position={{ lat: 55.843110, lng: -4.431183 }}
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