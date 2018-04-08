import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import { ACCESS_TOKEN } from "../config/map";

MapboxGL.setAccessToken(ACCESS_TOKEN);

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Street}
          zoomLevel={10}
          centerCoordinate={[36.8219, -1.2921]}
          style={styles.container}
        />
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
