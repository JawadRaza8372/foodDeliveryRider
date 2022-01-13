import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { w, h } from "react-native-responsiveness";
import CustomAuthButton from "../components/CustomAuthButton";
import UserInfoBox from "../components/UserInfoBox";
import { allCenter, mainColor, cardBg } from "../DeliveryColors";
const Profile = () => {
  return (
    <>
      <View style={styles.profileScreen}>
        <View style={styles.customProfile}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/photos/be-genuine-be-remarkable-be-worth-connecting-with-picture-id1312133528?b=1&k=20&m=1312133528&s=170667a&w=0&h=LQLk82XVFTNX90-gs5qy7RuHmtNqwfqhJZdtre5wZ08=",
            }}
            style={styles.avtarImg}
          />
        </View>
        <Text style={styles.ridername}>Rider Name</Text>
        <UserInfoBox icon="phone" firstTitle={"03XXXXXXXXX"} />
        <UserInfoBox
          icon="clipboard"
          firstTitle={"Order Assigned"}
          secondTitle={"20"}
        />
        <UserInfoBox icon="done" firstTitle={"Completed"} secondTitle={"19"} />
        <View style={styles.logoutCont}>
          <CustomAuthButton
            title={"Logout"}
            txtColor={cardBg}
            bgColor={mainColor}
            onPressFun={() => {
              console.log("Order Done");
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileScreen: {
    width: "100%",
    height: "100%",
    ...allCenter,
    paddingTop: StatusBar.currentHeight,
  },
  customProfile: {
    width: w("60%"),
    height: w("60%"),
    borderRadius: w("70%"),
    borderWidth: 2,
    borderColor: mainColor,
    alignSelf: "center",
    overflow: "hidden",
  },
  ridername: {
    fontSize: h("4.2%"),
    color: mainColor,
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 2,
  },
  logoutCont: {
    width: w("70%"),
    height: h("12%"),
    marginVertical: 15,
    alignSelf: "center",
  },
  avtarImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
