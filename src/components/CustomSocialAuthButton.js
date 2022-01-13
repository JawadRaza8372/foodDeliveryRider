import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { w, h } from "react-native-responsiveness";
import { allCenter, disableBtnBg } from "../DeliveryColors";
const CustomSocialAuthButton = ({ title, onPressFun }) => {
  return (
    <TouchableOpacity onPress={onPressFun} style={styles.loginBtn}>
      <Image
        style={styles.imag}
        source={require("../../assets/icgoogle.png")}
      />
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomSocialAuthButton;

const styles = StyleSheet.create({
  loginBtn: {
    width: "90%",
    height: h("6%"),
    borderRadius: 15,
    ...allCenter,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: disableBtnBg,
  },
  imag: {
    width: w("7%"),
    height: h("7%"),
    resizeMode: "contain",
    marginRight: 15,
  },
  btnTxt: {
    fontSize: h("2.3%"),
  },
});
