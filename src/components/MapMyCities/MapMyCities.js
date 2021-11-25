import React, { useState, useEffect } from "react";
import styles from './styles'
import MapView, { UrlTile } from "react-native-maps";
import { View } from "react-native";
import * as Location from "expo-location";

const MapMyCities = () => {
	function Map() {
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
				latitudeDelta: 5,
				longitudeDelta: 7,
			  });
			
		  })();
		}, []);
	  
		return (
			<View>
			  {location && (
				<MapView
				  style={styles.mapStyle}
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
                    urlTemplate={'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=c9084af619bc3b0f3ccf809b512ef4b0'}
                />
				</MapView>
			  )}
			</View>
		);
	}

  return (
	<Map/>
  )
}
 
export default MapMyCities
