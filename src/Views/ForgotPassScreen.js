import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import CustomAuthButton from "../components/CustomAuthButton";
import CustomTxtInpt from "../components/CustomTxtInpt";
import {
  mainColor,
  cardBg,
  allCenter,
  disableBtnBg,
  disabeBtnTxt,
} from "../DeliveryColors";
import { w, h } from "react-native-responsiveness";
const ForgotPassScreen = ({ navigation }) => {
  const [isPasswordLayout, setisPasswordLayout] = useState(false);
  const [myEmail, setmyEmail] = useState("");
  const [myPassword, setmyPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const backColor =
    (isPasswordLayout &&
      myPassword.newPassword &&
      myPassword.confirmPassword) ||
    (!isPasswordLayout && myEmail)
      ? mainColor
      : disableBtnBg;
  const textColor =
    (isPasswordLayout &&
      myPassword.newPassword &&
      myPassword.confirmPassword) ||
    (!isPasswordLayout && myEmail)
      ? cardBg
      : disabeBtnTxt;
  const formSubmitButton = () => {
    if (isPasswordLayout) {
      if (myPassword?.newPassword && myPassword?.confirmPassword) {
        console.log("passwords=> ", myPassword);
        navigation.navigate("Success");
      } else {
        return null;
      }
    } else {
      if (myEmail === "" || !myEmail) {
        console.log("enter email");
      } else {
        console.log("email");
        setisPasswordLayout(true);
      }
    }
  };
  return (
    <View style={styles.contianer}>
      <View style={styles.screenCont}>
        <View style={styles.fieldCont}>
          <View style={styles.screenHeadingView}>
            <Text style={{ fontSize: h("3.2%") }}>
              {isPasswordLayout ? "Create New Password" : "Forgot Password"}
            </Text>
            <Text style={{ fontSize: h("2.1%") }}>
              {isPasswordLayout
                ? "Enter same password in both fields"
                : "Enter your registered email below"}
            </Text>
          </View>
          {isPasswordLayout ? (
            <>
              <CustomTxtInpt
                title="New Password"
                placeholder="**** ****"
                onChange={(text) =>
                  setmyPassword((prevalue) => {
                    return {
                      ...prevalue,
                      newPassword: text,
                    };
                  })
                }
              />
              <CustomTxtInpt
                title="Confirm Password"
                placeholder="**** ****"
                onChange={(text) =>
                  setmyPassword((prevalue) => {
                    return {
                      ...prevalue,
                      confirmPassword: text,
                    };
                  })
                }
              />
            </>
          ) : (
            <CustomTxtInpt
              title="Email address"
              placeholder="eg:example@example.com"
              onChange={(text) => setmyEmail(text)}
            />
          )}
        </View>
        <View style={styles.ButnCont}>
          <CustomAuthButton
            title="Submit"
            txtColor={textColor}
            bgColor={backColor}
            onPressFun={formSubmitButton}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassScreen;

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
  fieldCont: {
    width: "100%",
    height: "85%",
  },
  ButnCont: {
    width: "100%",
    height: "10%",
  },
  screenHeadingView: { width: "90%", alignSelf: "center", marginBottom: 10 },
});
