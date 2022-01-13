import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { w, h } from "react-native-responsiveness";
import { allCenter, cardBg, justifyEvenly, mainColor } from "../DeliveryColors";
import ScreenHeader from "../components/ScreenHeader";
import CustomAuthButton from "../components/CustomAuthButton";
import UserInfoBox from "../components/UserInfoBox";
import TotalPriceBox from "../components/TotalPriceBox";
const DeliveryDetails = ({ navigation }) => {
  return (
    <>
      <View style={styles.deliveryScreen}>
        <ScreenHeader
          isBackButton={true}
          title={"Delivery Details"}
          goback={() => navigation.goBack()}
        />
        <ScrollView>
          <Image
            source={require("../../assets/burgerChipsOther.jpg")}
            style={styles.orderImag}
          />
          <Text style={styles.fontText}>Dish Name</Text>
          <View style={styles.greenBoxCont}>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>Items: 1</Text>
            </View>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>Rs/Unit: 10</Text>
            </View>
          </View>
          <Text style={styles.ownerInfo}>Owner Info</Text>
          <UserInfoBox icon="account-circle" firstTitle={"User Name"} />
          <UserInfoBox icon="phone" firstTitle={"03XXXXXXXXX"} />
          <UserInfoBox icon="location-pin" firstTitle={"Pakistan"} />
          <TotalPriceBox price={"1000"} />

          <View style={styles.greenBoxCont}>
            <View style={styles.buttonBox}>
              <CustomAuthButton
                title={"View Directions"}
                txtColor={cardBg}
                bgColor={mainColor}
                onPressFun={() => {
                  navigation.navigate("mapscreen");
                }}
              />
            </View>
            <View style={styles.buttonBox}>
              <CustomAuthButton
                title={"Mark As Done"}
                txtColor={cardBg}
                bgColor={mainColor}
                onPressFun={() => {
                  console.log("Order Done");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DeliveryDetails;

const styles = StyleSheet.create({
  deliveryScreen: {
    width: "100%",
    height: "100%",
    backgroundColor: cardBg,
    paddingTop: StatusBar.currentHeight,
  },
  orderImag: {
    width: w("100%"),
    height: h("28%"),
    resizeMode: "cover",
  },
  fontText: {
    fontSize: h("4.2%"),
    color: mainColor,
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 2,
  },
  ownerInfo: {
    fontSize: h("3.7%"),
    color: mainColor,
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 2,
  },
  greenBoxCont: {
    width: w("100%"),
    height: h("8%"),
    ...justifyEvenly,
    flexDirection: "row",
  },
  greenBox: {
    width: "40%",
    height: "100%",
    borderWidth: 2,
    borderColor: mainColor,
    ...allCenter,
  },
  buttonBox: {
    width: "48%",
    height: "100%",
    ...allCenter,
  },
  boxText: {
    fontSize: h("2.5%"),
    color: mainColor,
  },
});
