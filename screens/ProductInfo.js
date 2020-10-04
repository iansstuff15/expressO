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
export default function ProductInfo({ route, navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ marginBottom: 10 }}>
        <View
          style={{
            backgroundColor: "#DFA75E",
            height: 400,
            width: 350,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            alignSelf: "flex-end",
            marginTop: 60,
            marginBottom: 80,
          }}
        >
          <Image
            source={route.params.image}
            style={{
              alignSelf: "center",
              marginTop: 70,
              alignSelf: "center",
              height: 250,
              width: 300,
            }}
          />
        </View>
      </View>

      <View style={{ marginLeft: 30 }}>
        <View style={styles.row}>
          <Text style={[styles.bold, { marginRight: 10, fontSize: 30 }]}>
            {route.params.name}
          </Text>
          <Text style={(styles.bold, { fontSize: 20 })}>
            {route.params.volume}
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text>{route.params.description}</Text>
        </View>
        <PriceToCartButton
          price={route.params.price}
          navigation={navigation}
          item={route.params}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});
