import React, { useState } from "react";
import { FlatList, View, SafeAreaView, ImageBackground } from "react-native";

import ButtonComponent from "../components/Button/Button";
import InputComponent from "../components/Input/Input";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import MyCities from "../components/MyCities/MyCities";
import styles from "../stylesGlobal/stylesGlobalScreen";

const initialCities = [
  { id: "1", cityName: "Mar Chiquita" },
  { id: "2", cityName: "Mar de Ajó" },
  { id: "3", cityName: "Mar del Plata" },
  { id: "4", cityName: "Mar del Sur" },
  { id: "5", cityName: "Miramar" },
  { id: "6", cityName: "Necochea" },
  { id: "7", cityName: "Pinamar" },
  { id: "8", cityName: "San Bernardo" },
  { id: "9", cityName: "Santa Teresita" },
  { id: "10", cityName: "Villa Gesell" },
];
const MyCitiesScreen = ({ navigation }) => {
  const [cities, setCities] = useState(initialCities);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bgImage2.jpeg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <View>
            <HeaderTitle title="Mis Ciudades" />
          </View>
          <View style={styles.containerCitiesList}>
            <FlatList
              data={cities}
              renderItem={({ item }) => (
                <MyCities item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.btnContainer}>
            <ButtonComponent
              icon="home"
              text="Inicio"
              onPress={() => navigation.navigate("HomeScreen")}
            />
            <ButtonComponent
              icon="room"
              text="Ver Mapa"
              onPress={() => navigation.navigate("MapMyCitiesScreen")}
            />
            <ButtonComponent
              icon="compare"
              text="Modo Claro"
              onPress={() => console.log('modo dark')}
            />
          </View>
          <View>
            <InputComponent />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MyCitiesScreen;
