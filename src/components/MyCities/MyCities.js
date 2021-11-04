import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons} from "@expo/vector-icons";
import { Button } from "react-native-elements";
import styles from "./styles";

const MyCities = ({ item, navigation }) => {
  return (
    <View style={styles.containerCityList}>
      <View >
        <Text style={styles.textCityList}>{item.cityName}</Text>
      </View>
      <View style={styles.containerBtns}>
        <Button
          title="Ver Clima"
          buttonStyle={styles.containerBtnWeather}
          onPress={() => navigation.navigate("WeatherScreen")}
          icon={<MaterialIcons name="device-thermostat" size={20} color="#fff" /> }
          iconPosition="right"
        />
        <Button
          title="Borrar"
          buttonStyle={styles.containerBtnDelete}
          onPress={() => console.log("Delete City..")}
          icon={<MaterialIcons name="delete" size={20} color="#fff" /> }
          iconPosition="right"
        />
      </View>
    </View>
  );
};

export default MyCities;
