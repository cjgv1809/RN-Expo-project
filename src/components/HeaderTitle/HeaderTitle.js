import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import styles from "./styles";

const HeaderTitle = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.mainTextDirection}>
        <Text h4 h4Style={styles.textStyles}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderTitle;
