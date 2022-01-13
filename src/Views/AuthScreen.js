import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  cardBg,
  mainColor,
  mainColorLite,
  greyText,
  justifyEvenly,
  allCenter,
} from "../DeliveryColors";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import CustomSwitchButton from "../components/CustomSwitchButton";
import CustomAuthButton from "../components/CustomAuthButton";
import SignUpComp from "../components/SignUpComp";
import LoginComp from "../components/LoginComp";
const AuthScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoginModal, setisLoginModal] = useState(false);
  const submitForms = (data) => {
    console.log(data);
    navigation.navigate("mainApp");
  };
  return (
    <>
      <View style={styles.contianer}>
        <View style={styles.contentView}>
          <Image
            source={require(`../../assets/welcomePic.png`)}
            style={styles.spalshImg}
          />
          <View style={styles.textCont}>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.subheading}>
              Before Enjoying Foodmedia Services Please Register First
            </Text>
          </View>
        </View>
        <View style={styles.bottomNavView}>
          <CustomAuthButton
            title="Create Account"
            txtColor={cardBg}
            bgColor={mainColor}
            onPressFun={() => {
              setModalVisible(true);
              setisLoginModal(false);
            }}
          />
          <CustomAuthButton
            title="Login"
            txtColor={mainColor}
            bgColor={mainColorLite}
            onPressFun={() => {
              setModalVisible(true);
              setisLoginModal(true);
            }}
          />

          <Text style={styles.noticeTxt}>
            By Logging In Or Registering, You Have Agreed To The Terms And
            Conditions And Privacy Policy.
          </Text>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalbg}>
          <View style={styles.emptyContView} />
          <View style={styles.fillContView}>
            <View style={styles.fillViewfirst}>
              <View style={styles.rectViewCont}>
                <TouchableOpacity style={styles.rectView} />
              </View>
              <View style={styles.SwitchButtonsCont}>
                <CustomSwitchButton
                  title="Create Account"
                  isActive={!isLoginModal ? true : false}
                  onPressFun={() => setisLoginModal(false)}
                />
                <CustomSwitchButton
                  title="Login"
                  isActive={isLoginModal ? true : false}
                  onPressFun={() => setisLoginModal(true)}
                />
              </View>
            </View>
            <View style={styles.fillViewNext}>
              <KeyboardAvoidingScrollView containerStyle={styles.authSection}>
                {isLoginModal ? (
                  <LoginComp
                    forgotScreen={() => navigation.navigate("ForgotPswd")}
                    submitForm={submitForms}
                  />
                ) : (
                  <SignUpComp submitForm={submitForms} />
                )}
              </KeyboardAvoidingScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: cardBg,
  },
  bottomNav: {
    width: "95%",
    height: "95%",
    ...justifyEvenly,
    flexDirection: "row",
  },
  modalbg: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  noticeTxt: {
    fontSize: h("1.5%"),
    color: "black",
    textAlign: "center",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: mainColor,
    height: h("6%"),
    borderRadius: 20,
    ...allCenter,
  },

  btnTxt: {
    fontSize: h("2.5%"),
    color: cardBg,
    fontWeight: "700",
  },
  spalshImg: {
    width: w("90%"),
    height: h("23%"),
    resizeMode: "contain",
  },
  contentView: {
    width: "100%",
    height: "70%",
    ...allCenter,
  },
  bottomNavView: {
    width: "100%",
    height: "30%",
    ...justifyEvenly,
    flexDirection: "column",
  },
  textCont: {
    width: "90%",
    ...allCenter,
    flexDirection: "column",
    marginTop: h("4%"),
  },
  heading: {
    color: "#1F2937",
    fontSize: h("3.5%"),
    marginBottom: h("1%"),
  },
  subheading: {
    color: greyText,
    fontSize: h("2%"),
    textAlign: "center",
  },
  SwitchButtonsCont: {
    width: "100%",
    ...justifyEvenly,
    flexDirection: "row",
    height: "50%",
  },
  emptyContView: {
    width: "100%",
    height: "30%",
  },
  fillContView: {
    width: "100%",
    height: "70%",
    backgroundColor: cardBg,
    borderTopRightRadius: w("10%"),
    borderTopLeftRadius: w("10%"),
    overflow: "hidden",
  },
  fillViewfirst: { width: "100%", height: "20%" },
  fillViewNext: {
    width: "100%",
    height: "80%",
    ...allCenter,
    flexDirection: "column",
  },
  authSection: {
    width: "100%",
    height: "100%",
    ...allCenter,
    flexDirection: "column",
  },
  rectView: {
    width: 70,
    height: 10,
    borderRadius: 15,
    backgroundColor: greyText,
  },
  rectViewCont: {
    width: "100%",
    ...justifyEvenly,
    flexDirection: "row",
    height: "50%",
  },
});
