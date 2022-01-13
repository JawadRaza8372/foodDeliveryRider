import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { h } from "react-native-responsiveness";
import { mainColor, disabeBtnTxt, allCenter } from "../DeliveryColors";
const CustomSwitchButton = ({ title, onPressFun, isActive }) => {
  return (
    <TouchableOpacity onPress={onPressFun} style={styles.switchBtnView}>
      <Text
        style={{
          fontSize: isActive ? h("2.1%") : h("1.9%"),
          color: isActive ? mainColor : disabeBtnTxt,
        }}
      >
        {title}
      </Text>
      {isActive && <View style={styles.activeborder} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  activeborder: {
    width: "60%",
    height: 4,
    borderRadius: 3,
    marginTop: 5,
    backgroundColor: mainColor,
  },
  switchBtnView: {
    width: "30%",
    height: "100%",
    ...allCenter,
  },
});
export default CustomSwitchButton;
