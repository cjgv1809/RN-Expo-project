import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "react-native-elements";
import styles from "./styles";

const ButtonComponent = ({ icon, text }) => {
  return (
    <Button
      icon={<Icon name={icon} size={28} color="#fff" />}
      title={text}
      containerStyle={styles.btnContainerStyle}
      buttonStyle={styles.btnStyle}
      titleStyle={styles.btnTitleStyle}
      iconPosition="top"
    />
  );
};

export default ButtonComponent;
