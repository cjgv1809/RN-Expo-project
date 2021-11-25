import React, { useState, useEffect } from "react";
import styles from './styles'
import MapView from "react-native-maps";
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
				latitudeDelta: 0.001,
				longitudeDelta: 0.001,
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
				>
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
