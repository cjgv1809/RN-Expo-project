import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Input } from "react-native-elements";
import fetchWeather from "../../../api";
import styles from "./styles";

const InputComponent = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const search = async () => {
    const data = await fetchWeather(city);
    setWeather(data);
    setCity("");
  };

  return (
    <Input
      placeholder="Buscar ciudad"
      autoFocus
      type="text"
      value={city}
      onChange={(e) => setCity(e.nativeEvent.text)}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      placeholderTextColor="white"
      rightIcon={<Icon name="search" size={30} color="#fff" onPress={search} />}
      onSubmitEditing={search}
    />
  );
};

export default InputComponent;
