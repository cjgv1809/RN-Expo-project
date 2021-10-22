import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const WeatherScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text>Weather</Text>
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
    </>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;
