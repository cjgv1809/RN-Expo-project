import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";



export default function App() {
  return (
    
      <ImageBackground
        source={require("./assets/splash.png")}
        style={styles.image}
      >
        <AppNavigator />
      </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
