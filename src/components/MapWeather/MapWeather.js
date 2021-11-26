import React, { useState, useEffect } from "react";
import MapView, { UrlTile } from "react-native-maps";
import { View } from "react-native";
import * as Location from "expo-location";
import { MAP_APP_ID } from '@env';

const MapWeather = (props) => {
  
  const { styles } = props;
  const [location, setLocation] = useState(null);
	  
  useEffect(() => {
    (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
      setLocation({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
      latitudeDelta: 15,
      longitudeDelta: 15,
      });
    
    })();
  }, []);
	  
  return (
    <View>
      {location && (
      <MapView
        style={styles}
        initialRegion={location}
        showsUserLocation={true}
        onRegionChange={(region) => setLocation(region)}
        provider={"google"}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomTapEnabled={true}
        rotateEnabled={true}
        scrollEnabled={true}
        maxZoomLevel={20}
      >
      <UrlTile
                  zIndex={1}
                  urlTemplate={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${MAP_APP_ID}`}
              />
      </MapView>
      )}
    </View>
  );
}

export default MapWeather;