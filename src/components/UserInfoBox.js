import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  alignStart,
  allCenter,
  cardBg,
  alignEnd,
  disabeBtnTxt,
} from "../DeliveryColors";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
const UserInfoBox = ({ icon, firstTitle, secondTitle }) => {
  return (
    <View style={styles.infoBoxUser}>
      <View style={styles.iconView}>
        {icon === "account-circle" || icon === "done" ? (
          <MaterialIcons
            name={`${icon}`}
            size={h("5.4%")}
            color={disabeBtnTxt}
          />
        ) : (
          <Entypo name={`${icon}`} size={h("5.4%")} color={disabeBtnTxt} />
        )}
      </View>
      <View style={styles.contentView}>
        <View
          style={{ ...styles.firstChild, width: secondTitle ? "70%" : "100%" }}
        >
          <Text style={styles.textContent}>{firstTitle}</Text>
        </View>
        {secondTitle && (
          <View style={styles.secondChild}>
            <Text style={styles.textContent}>{secondTitle}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default UserInfoBox;

const styles = StyleSheet.create({
  infoBoxUser: {
    width: w("95%"),
    height: h("7.2%"),
    backgroundColor: cardBg,
    ...allCenter,
    flexDirection: "row",
    marginBottom: 6,
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
  },
  iconView: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  contentView: {
    width: "80%",
    height: "100%",
    ...allCenter,
    flexDirection: "row",
  },
  firstChild: {
    width: "70%",
    height: "100%",
    ...alignStart,
  },
  secondChild: {
    width: "30%",
    height: "100%",
    ...allCenter,
  },
  textContent: {
    fontSize: h("3.2%"),
    color: disabeBtnTxt,
  },
});
