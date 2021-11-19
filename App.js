import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import SQLite from 'react-native-sqlite-storage';

// create the sqlite database using opendatabase method, 
// this method is also valid for access the previously created database
const db = SQLite.openDatabase(
  {
    name: 'StorageDB',
    location: 'default'
  },
  () => { },
  error => { console.log(error) }
);

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

// we call function createtable to create the cities table if don't exist
const createTable = () => {
  db.transaction((sql) => {
    sql.executeSql(
      "CREATE TABLE IF NOT EXISTS "
      + "cities "
      + "(id INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT, idApi INTEGER);"
    )
  })
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
