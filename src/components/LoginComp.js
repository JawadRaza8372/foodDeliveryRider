import React, { useState } from "react";
import CustomAuthButton from "./CustomAuthButton";
import CustomSocialAuthButton from "./CustomSocialAuthButton";
import CustomTxtInpt from "./CustomTxtInpt";
import {
  mainColor,
  cardBg,
  disableBtnBg,
  disabeBtnTxt,
  allCenter,
} from "../DeliveryColors";
import { TouchableOpacity, Text, View } from "react-native";
import { w, h } from "react-native-responsiveness";
const LoginComp = ({ forgotScreen, submitForm }) => {
  const [userData, setuserData] = useState({ email: "", password: "" });
  const buttonBack =
    userData?.email && userData?.password ? mainColor : disableBtnBg;
  const buttontext =
    userData?.email && userData?.password ? cardBg : disabeBtnTxt;
  const onSubmit = () => {
    if (userData?.email && userData?.password) {
      submitForm(userData);
    } else {
      return null;
    }
  };
  return (
    <>
      <CustomTxtInpt
        title="Email Address"
        placeholder="eg. example@example.com"
        onChange={(text) =>
          setuserData((prevalue) => {
            return {
              ...prevalue,
              email: text,
            };
          })
        }
      />
      <CustomTxtInpt
        title="Password"
        placeholder="**** ****"
        onChange={(text) =>
          setuserData((prevalue) => {
            return {
              ...prevalue,
              password: text,
            };
          })
        }
      />
      <TouchableOpacity
        onPress={forgotScreen}
        style={{
          width: "90%",
          height: h("10%"),
          alignSelf: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ fontSize: h("2%"), color: mainColor }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: h("10%"),
          ...allCenter,
        }}
      >
        <CustomAuthButton
          title="Login"
          txtColor={buttontext}
          bgColor={buttonBack}
          onPressFun={onSubmit}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: h("10%"),
          ...allCenter,
        }}
      >
        <CustomSocialAuthButton title="Sign in with Google" />
      </View>
    </>
  );
};

export default LoginComp;
