import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  cardBg,
  greyText,
  justifyEvenly,
  lightColor,
  mainColor,
} from "../DeliveryColors.js";
import CustomAuthButton from "../components/CustomAuthButton.js";
const MySplashScreen = ({ navigation }) => {
  const [dataIndex, setdataIndex] = useState(0);
  const splashData = [
    {
      key: 1,
      heading: "The Fastest\nFood Delivery",
      subheading:
        "You don't have to go far to find a good restaurant,we have provided all the restaurants that is near you",
    },
    {
      key: 2,
      heading: "Our Job is To\nBring Yummy",
      subheading:
        "Now eat well, don't leave the house,You can choose your favorite food only with one click",
    },
    {
      key: 3,
      heading: "Freash & Yummy\nIn Your Tummy",
      subheading: "You can eat at freash,fully hygenic\nand yummy food",
    },
  ];

  return (
    <View style={styles.splashView}>
      <FlatList
        data={splashData}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item, index }) => {
          console.log(item);
          return (
            <View style={styles.contentView}>
              <View
                style={{
                  width: w("100%"),
                  height: "60%",
                }}
              >
                <Image
                  source={
                    item?.key === 1
                      ? require(`../../assets/burger.jpg`)
                      : item?.key === 2
                      ? require(`../../assets/burgerChips.jpg`)
                      : require("../../assets/deliveryfood.jpg")
                  }
                  style={styles.spalshImg}
                />
              </View>
              <View style={{ width: w("100%"), height: "40%" }}>
                <View style={styles.textCont}>
                  <Text style={styles.heading}>{item?.heading}</Text>
                  <Text style={styles.subheading}>{item?.subheading}</Text>
                  <View style={styles.navdotsCont}>
                    {splashData.map((dat, index) => (
                      <View
                        key={index}
                        style={{
                          width: index + 1 === item?.key ? 25 : 10,
                          height: 10,
                          borderRadius: 10,
                          marginHorizontal: 2,
                          backgroundColor:
                            index + 1 === item?.key ? mainColor : lightColor,
                        }}
                      />
                    ))}
                  </View>
                  <CustomAuthButton
                    title="Get Started"
                    txtColor={cardBg}
                    bgColor={mainColor}
                    onPressFun={() => navigation.replace("auth")}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MySplashScreen;

const styles = StyleSheet.create({
  splashView: {
    width: "100%",
    height: "100%",
    backgroundColor: cardBg,
    paddingTop: StatusBar.currentHeight,
  },
  textCont: {
    width: "90%",
    height: "90%",
    ...justifyEvenly,
    alignSelf: "center",
    flexDirection: "column",
  },
  heading: {
    color: mainColor,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: h("3.5%"),
  },
  transparentButton: {
    width: "20%",
    height: "100%",
    ...allCenter,
  },
  subheading: {
    color: greyText,
    fontSize: h("2%"),
    textAlign: "center",
  },
  SkipButton: { color: greyText, fontSize: h("2.5%") },
  bottomNav: {
    width: "95%",
    height: "95%",
    ...justifyEvenly,
    flexDirection: "row",
  },
  spalshImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentView: {
    width: w("100%"),
    height: h("100%"),
    overflow: "hidden",
  },

  navdotsCont: {
    width: "50%",
    ...allCenter,
    flexDirection: "row",
  },
});
