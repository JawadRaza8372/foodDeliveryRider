import React, { useState } from "react";
import CustomAuthButton from "./CustomAuthButton";
import CustomSocialAuthButton from "./CustomSocialAuthButton";
import CustomTxtInpt from "./CustomTxtInpt";
import { View } from "react-native";
import {
  mainColor,
  cardBg,
  disableBtnBg,
  disabeBtnTxt,
} from "../DeliveryColors";
import { w, h } from "react-native-responsiveness";
import { allCenter } from "../DeliveryColors";

const SignUpComp = ({ submitForm }) => {
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const buttonBack =
    userData?.email && userData?.username && userData?.password
      ? mainColor
      : disableBtnBg;
  const buttontext =
    userData?.email && userData?.username && userData?.password
      ? cardBg
      : disabeBtnTxt;
  const onSubmit = () => {
    if (userData?.email && userData?.username && userData?.password) {
      submitForm(userData);
    } else {
      return null;
    }
  };
  return (
    <>
      <CustomTxtInpt
        title="Full Name"
        placeholder="Enter Your Full Name"
        onChange={(text) =>
          setuserData((prevalue) => {
            return {
              ...prevalue,
              username: text,
            };
          })
        }
      />
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
      <View
        style={{
          width: "100%",
          height: h("10%"),
          ...allCenter,
        }}
      >
        <CustomAuthButton
          title="Registration"
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
        <CustomSocialAuthButton title="SignUp with Google" />
      </View>
    </>
  );
};

export default SignUpComp;
