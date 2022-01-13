import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  alignStart,
  allCenter,
  cardBg,
  alignEnd,
  disabeBtnTxt,
  mainColor,
  justifyBetween,
} from "../DeliveryColors";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
const TotalPriceBox = ({ price }) => {
  return (
    <View style={styles.infoBoxUser}>
      <Text style={styles.textContent}>Total Price:</Text>
      <Text style={styles.textContent}>{price} rs</Text>
    </View>
  );
};

export default TotalPriceBox;

const styles = StyleSheet.create({
  infoBoxUser: {
    width: w("95%"),
    height: h("7%"),
    backgroundColor: cardBg,
    paddingHorizontal: 15,
    ...justifyBetween,
    flexDirection: "row",
    marginVertical: 8,
    alignSelf: "center",
    borderRadius: h("3%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    overflow: "hidden",
    borderColor: mainColor,
    borderWidth: 2,
  },
  textContent: {
    fontSize: h("3.2%"),
    color: mainColor,
  },
});
