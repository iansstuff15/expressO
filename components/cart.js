import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigator } from "react-navigation";

import { withNavigation } from "react-navigation";
import Checkout from "../screens/Checkout";
export default function Cart(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Checkout", props.data)}
      >
        <View style={styles.cartButton}>
          <Image
            source={require("../assets/96ee4655fb25d1687129f0a1df8f4d54.png")}
            style={styles.buttonIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    backgroundColor: "#402503",
    padding: 30,
    width: 120,
    height: 100,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonIcon: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    marginTop: -20,
  },

  card: {
    flex: 1,
    height: 400,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
});
