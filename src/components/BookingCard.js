import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CustomAuthButton from "./CustomAuthButton";
import { w, h } from "react-native-responsiveness";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  alignStart,
  allCenter,
  cardBg,
  justifyEvenly,
  mainColor,
} from "../DeliveryColors";
const BookingCard = ({ title, isDelivered, onCheck }) => {
  const onClickFunc = () => {
    onCheck();
  };
  return (
    <TouchableOpacity style={styles.bookingCardView} onPress={onClickFunc}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={require("../../assets/burgerChipsOther.jpg")}
          resizeMode="cover"
          style={styles.myimgshow}
        >
          <View style={styles.orderDet}>
            {isDelivered ? (
              <>
                <MaterialIcons name="done" size={h("6%")} color={cardBg} />
                <Text style={styles.mesg}>Done</Text>
              </>
            ) : (
              <>
                <Entypo name="cross" size={h("6%")} color={cardBg} />
                <Text style={styles.mesg}>Pending</Text>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
      <View style={styles.mainContain}>
        <Text style={{ fontSize: h("2.6%") }}>{title} -Dish Name</Text>
        <View style={styles.subContain}>
          <View style={styles.firstchildcontain}>
            <View style={styles.miniDivCont}>
              <Entypo name="location-pin" size={h("4%")} color={mainColor} />
            </View>
            <View style={styles.miniDivContS}>
              <Text style={{ fontSize: h("2%") }}>Delivery Location</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  bookingCardView: {
    width: w("96%"),
    height: h("12%"),
    backgroundColor: cardBg,
    alignSelf: "center",
    ...allCenter,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 15,
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
  imgContainer: {
    width: "30%",
    height: "100%",
    ...allCenter,
    overflow: "hidden",
  },
  myimgshow: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  orderDet: {
    width: "100%",
    height: "100%",
    ...allCenter,
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  mainContain: {
    paddingLeft: 5,
    width: "70%",
    height: "100%",
    ...alignStart,
    flexDirection: "column",
    overflow: "hidden",
  },
  subContain: {
    width: "95%",
    height: "40%",
    ...allCenter,
    flexDirection: "row",
  },
  firstchildcontain: {
    height: "100%",
    width: "100%",
    ...allCenter,
    flexDirection: "row",
  },
  miniDivCont: {
    height: "100%",
    width: "15%",
    ...allCenter,
  },
  miniDivContS: {
    width: "85%",
    height: "100%",
    overflow: "hidden",
    ...alignStart,
  },
  buttonContain: { height: "100%", width: "40%" },
  mesg: {
    color: cardBg,
    fontSize: h("2.5%"),
  },
});
