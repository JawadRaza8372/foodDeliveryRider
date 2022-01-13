import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { w, h } from "react-native-responsiveness";
import ScreenHeader from "../components/ScreenHeader";
const MapScreen = ({ navigation }) => {
  const rehmanplaza = {
    latitude: 32.0753295,
    longitude: 72.6767892,
  };
  return (
    <>
      <View style={styles.mapCont}>
        <ScreenHeader
          isBackButton={true}
          title="Your Destination"
          isProfileImg={true}
          goback={() => navigation.goBack()}
        />

        <MapView
          provider="google"
          initialRegion={{
            latitude: 32.074,
            longitude: 72.6861,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        >
          <Marker coordinate={rehmanplaza} title="Hotle Name" description=" " />
        </MapView>
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapCont: {
    width: "100%",
    height: "100%",
    position: "relative",
    paddingTop: StatusBar.currentHeight,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  headerMap: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: h("10%"),
    backgroundColor: "blue",
  },
});
