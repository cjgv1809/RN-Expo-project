import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import {styles} from '../theme/appTheme'

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/splash.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View>
          <Text>Home</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MyCitiesScreen")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Mis Ciudades</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("hola")}>
          <View style={styles.btn2}>
            <Text style={styles.btnText}>Información</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("WeatherScreen")}>
          <View style={styles.btn2}>
            <Text style={styles.btnText}>Buscar Ciudad</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};



export default HomeScreen;
