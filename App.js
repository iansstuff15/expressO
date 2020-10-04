import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import ProductInfo from "./screens/ProductInfo";
import Profile from "./screens/Profile";
import Search from "./screens/search";
import Welcome from "./screens/Welcome";
import SplashScreen from "react-native-splash-screen";

const Stack = createStackNavigator();

export default function App() {
  console.log("in app");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
          initialParams={{ cart: 0, list: "" }}
        />
        <Stack.Screen name="Checkout" options={{}} component={Checkout} />
        <Stack.Screen name="ProductInfo" options={{}} component={ProductInfo} />
        <Stack.Screen name="Profile" options={{}} component={Profile} />
        <Stack.Screen name="Search" options={{}} component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
