import React from "react";
import { Image, StyleSheet, Text, View, StatusBar } from "react-native";
import { w, h } from "react-native-responsiveness";
import { mainColor, cardBg, mainColorLite, allCenter } from "../DeliveryColors";
import CustomAuthButton from "../components/CustomAuthButton";
import { MaterialIcons } from "@expo/vector-icons";

const SuccessScreen = ({ navigation }) => {
  const msg = "Congratulations your password \n has been changed";
  return (
    <View style={styles.contianer}>
      <View style={styles.screenCont}>
        <View style={styles.fieldCont}>
          <View style={styles.successContIcon}>
            <MaterialIcons name="done" size={w("22%")} color={cardBg} />
          </View>
          <Text style={styles.successMsg}>Success</Text>
          <Text style={{ fontSize: h("2%"), textAlign: "center" }}>{msg}</Text>
        </View>
        <View style={styles.ButnCont}>
          <CustomAuthButton
            title="Sign in"
            txtColor={cardBg}
            bgColor={mainColor}
            onPressFun={() => navigation.navigate("mainApp")}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: cardBg,
    ...allCenter,
  },
  screenCont: {
    height: "92%",
    width: "100%",
    ...allCenter,
  },
  confirmImg: {
    width: w("80%"),
    height: h("80%"),
    resizeMode: "contain",
  },
  fieldCont: {
    width: "100%",
    height: "85%",
    ...allCenter,
  },
  ButnCont: {
    width: "100%",
    height: "10%",
  },
  successContIcon: {
    width: w("30%"),
    height: w("30%"),
    backgroundColor: mainColor,
    borderRadius: w("20%"),
    ...allCenter,
  },
  successMsg: {
    fontSize: h("4%"),
    marginTop: h("3%"),
    marginBottom: h("2%"),
  },
});
