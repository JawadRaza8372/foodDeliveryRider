import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { w, h } from "react-native-responsiveness";
import { allCenter, cardBg, mainColor, justifyStart } from "../DeliveryColors";
import { Entypo } from "@expo/vector-icons";

const ScreenHeader = ({ isBackButton, title, isProfileImg, goback }) => {
  return (
    <View style={styles.screenHeader}>
      <View style={styles.backButtonCont}>
        {isBackButton && (
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              goback();
            }}
          >
            <Entypo name="chevron-left" size={h("5%")} color={cardBg} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.screenHeadCont}>
        <Text style={styles.screenTitle}>{title}</Text>
      </View>
      <View style={styles.avatrCont}>
        {isProfileImg && (
          <View style={styles.customAvtar}>
            <Image
              source={{
                uri: "https://media.istockphoto.com/photos/be-genuine-be-remarkable-be-worth-connecting-with-picture-id1312133528?b=1&k=20&m=1312133528&s=170667a&w=0&h=LQLk82XVFTNX90-gs5qy7RuHmtNqwfqhJZdtre5wZ08=",
              }}
              style={styles.avtarImg}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  screenHeader: {
    width: "100%",
    height: h("7%"),
    ...justifyStart,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: mainColor,
  },
  backButtonCont: {
    width: "20%",
    height: "100%",
  },
  avtarImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  screenHeadCont: {
    width: "60%",
    height: "100%",
    ...allCenter,
  },
  avatrCont: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  customAvtar: {
    width: h("6.2%"),
    height: h("6.2%"),
    borderRadius: h("7%"),
    borderWidth: 1,
    borderColor: cardBg,
    overflow: "hidden",
  },
  backbutton: {
    height: "100%",
    width: "100%",
    ...allCenter,
  },
  screenTitle: {
    fontSize: h("3.3%"),
    fontWeight: "900",
    color: cardBg,
  },
});
