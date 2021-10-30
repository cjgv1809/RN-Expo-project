import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ButtonComponent from "../components/Button/Button";
import InputComponent from "../components/Input/Input";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import styles from "../theme/theme";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bgImage.jpeg")}
        style={styles.image}
      >
        <View style={styles.headerContainer}>
          <HomeHeader />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyCitiesScreen")}
          >
            <ButtonComponent icon="folder" text="Mis Ciudades" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ButtonComponent icon="info" text="Info & Uso" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ButtonComponent icon="group" text="Nosotros" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <InputComponent />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
