import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MySplashScreen from "../Views/MySplashScreen";
import MyBottomTabNav from "./MyBottomTabNav";
import AuthScreen from "../Views/AuthScreen";
import ForgotPassScreen from "../Views/ForgotPassScreen";
import SuccessScreen from "../Views/SuccessScreen";
import DeliveryDetails from "../Views/DeliveryDetails";
import MapScreen from "../Views/MapScreen";
const Stack = createStackNavigator();
export default function MyStackNavig() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={MySplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPswd"
          component={ForgotPassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mainApp"
          component={MyBottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detailScrn"
          component={DeliveryDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mapscreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
