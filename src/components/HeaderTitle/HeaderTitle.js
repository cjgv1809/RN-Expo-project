import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const HeaderTitle = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.mainText}>{title}</Text>
    </View>
  );
};



export default HeaderTitle;
