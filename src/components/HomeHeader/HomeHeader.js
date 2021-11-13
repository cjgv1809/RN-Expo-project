import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Paula's</Text>
      </View>
      <View style={styles.subtitleTextContainer}>
        <Text style={styles.subtitleText1}>Weather</Text>
        <Text style={styles.subtitleText2}>App</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
