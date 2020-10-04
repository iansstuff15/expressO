import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Card from "../components/card";
import Cart from "../components/cart";
import ImageComp from "../components/image";
import ProductView from "../components/producView";
import { RadioButton } from "react-native-paper";

import PriceToCartButton from "../components/price-toCardButton";

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.profile}>
        <Image
          source={require("../assets/Ellipse2.png")}
          style={{
            height: 201,
            width: 201,
          }}
        />
      </View>
      <Text style={styles.text}>Last Name, First Name</Text>
      <Text style={styles.text}>00 st. village, city, 0000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 60,
  },
  text: {
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
