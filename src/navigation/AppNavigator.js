import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import WeatherScreen from "../screens/WeatherScreen";
import MapMyCitiesScreen from "../screens/MapMyCitiesScreen";
import MyCitiesScreen from "../screens/MyCitiesScreen";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
      <Stack.Screen
        name="MyCitiesScreen"
        component={MyCitiesScreen}
        options={{ title: "Mis Ciudades" }}
      />
      <Stack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={{ title: "Buscar Ciudad" }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};
