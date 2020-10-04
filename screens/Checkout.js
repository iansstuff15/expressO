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

import PriceToCartButton from "../components/price-toCardButton";
import List from "../components/list";
import ProceedButton from "../components/proceedButton";

export default function Profile({ route }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 60, marginLeft: 20 }}>
          Orders
        </Text>
        <List item={route.params} />
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginRight: 20,
              marginTop: 20,
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginRight: 20,
              marginTop: 20,
            }}
          >
            $00
          </Text>
        </View>
      </View>

      <View>
        <ProceedButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "#DFA75E",
    borderRadius: 100,
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  text: {
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
