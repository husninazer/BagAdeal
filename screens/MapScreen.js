import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react'
import styled from "styled-components";
import { Marker } from 'react-native-maps';
import { Overlay } from 'react-native-maps';

let markersList = [
  {
     latitude: 21.544107,
     longitude:39.248080,
     title: "Sample",
     description: "Sedc"
  },

  {
   latitude: 21.444107,
   longitude:39.348080,
   title: "Sample",
   description: "Sedc"
  },

  {
   latitude: 21.244107,
   longitude: 39.238080,
   title: "Sample",
   description: "Sedc"
  },

  {
   latitude: 21.554107,
   longitude:39.238080,
   title: "Sample",
   description: "Sedc"
 }
]

export default class App extends React.Component {


//setState({ markers : markersList })




render() {

//  this.setState({markers: JSON.parse(JSON.stringify(markersList))})
  return (
  <MapView style={{flex: 1}}
     initialRegion={{
       latitude: 21.627812,
       longitude: 39.111026,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }}
     minZoomLevel={15}  // default => 0
    maxZoomLevel={30} // default 20
    showsUserLocation = {true}
    showsMyLocationButton = {true}
  >


     <Marker
       coordinate = {{latitude: 21.627888, longitude: 39.111230}}
       title = "Shake Shack"
       description = "Today 18:00 - 19:00"
       image={require('../assets/green.png')}
    />

    <Marker
      coordinate = {{latitude: 21.627388, longitude: 39.111130}}
      title = "KFC"
      description = "Nothing Available"
      image={require('../assets/red.png')}
   />

   <Marker
     coordinate = {{latitude: 21.626388, longitude: 39.111233}}
     title = "Krispy Kreme"
     description = "Today 22:00 - 23:00"
     image={require('../assets/green.png')}
  />

  <Marker
    coordinate = {{latitude: 21.626688, longitude: 39.112733}}
    title = "Shawarmer"
    description = "Today 23:00 - 23:59"
    image={require('../assets/green.png')}
 >


</Marker>

   </MapView>
  );
}
}


const Container = styled.View`
  flex: 1;

`;
