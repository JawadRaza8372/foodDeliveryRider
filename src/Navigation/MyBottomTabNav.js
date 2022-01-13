import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
  BottomTabBarHeightContext,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
import { cardBg, greyText, mainColor } from "../DeliveryColors";
import Profile from "../Views/Profile";
import HomeScreen from "../Views/HomeScreen";
import { w, h } from "react-native-responsiveness";

const MyBottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        },
        tabBarActiveTintColor: cardBg,
        headerShown: false,
        tabBarActiveBackgroundColor: mainColor,
        tabBarInactiveBackgroundColor: cardBg,
        tabBarInactiveTintColor: greyText,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="car" color={color} size={h("5%")} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={h("5%")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTabNav;
