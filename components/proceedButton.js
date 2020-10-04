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

export default function ProceedButton() {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => alert("checked out")}>
          <View
            style={{
              backgroundColor: "#402503",
              padding: 20,
              borderRadius: 10,
              width: 160,
              height: 70,
              marginTop: 30,
              marginBottom: 30,
              marginRight: 10,
              alignSelf: "flex-end",
            }}
          >
            <Image
              source={require("../assets/img_1333941.png")}
              style={{
                marginRight: 10,
                alignSelf: "flex-end",
                height: 52,
                width: 57,
                marginTop: -10,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
