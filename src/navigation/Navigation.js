import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MyCitiesScreen from "../screens/MyCitiesScreen";
import WeatherScreen from "../screens/WeatherScreen";
import MapMyCitiesScreen from "../screens/MapMyCitiesScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyCitiesScreen"
          component={MyCitiesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeatherScreen"
          component={WeatherScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
