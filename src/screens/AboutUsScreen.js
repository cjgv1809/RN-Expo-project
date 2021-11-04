import React from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
} from "react-native";

import ButtonComponent from "../components/Button/Button";
import InputComponent from "../components/Input/Input";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import styles from "../stylesGlobal/stylesGlobalScreen";

const AboutUsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bgImage2.jpeg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <View>
            <HeaderTitle title="Sobre Nosotros" />
          </View>
          <View style={styles.textContainerAbout}>
            <Text>Somos un grupo de ....</Text>
          </View>
          <View style={styles.btnContainer}>
            <ButtonComponent
              icon="home"
              text="Inicio"
              onPress={() => navigation.navigate("HomeScreen")}
            />
            <ButtonComponent
              icon="folder"
              text="Mis Ciudades"
              onPress={() => navigation.navigate("MyCitiesScreen")}
            />
            <ButtonComponent
              icon="compare"
              text="Modo Claro"
              onPress={() => console.log("modo dark")}
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

export default AboutUsScreen;
