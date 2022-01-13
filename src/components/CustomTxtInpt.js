import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { w, h } from "react-native-responsiveness";
import { betwenStart } from "../DeliveryColors";

const CustomTxtInpt = ({ title, placeholder, onChange, ...otherprops }) => {
  return (
    <View style={styles.inputContainerView}>
      <Text>{title}</Text>
      <TextInput
        {...otherprops}
        placeholder={`${placeholder}`}
        onChangeText={onChange}
        style={styles.inputfieldStyle}
      />
    </View>
  );
};

export default CustomTxtInpt;

const styles = StyleSheet.create({
  inputfieldStyle: {
    width: w("80%"),
    height: h("6%"),
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    borderColor: "#BEC5D1",
    alignSelf: "center",
  },
  inputContainerView: {
    width: "90%",
    height: h("10%"),
    alignSelf: "center",
    ...betwenStart,
    flexDirection: "column",
    paddingTop: 5,
  },
});
