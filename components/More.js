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
import Search from "../screens/search";

export default function More(props) {
  return (
    <View>
      {console.log(props.data)}
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Search", props.data)}
      >
        <View style={styles.moreButton}>
          <Image
            source={require("../assets/iconfinder_more_126574.png")}
            style={styles.buttonIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  moreButton: {
    backgroundColor: "#402503",
    padding: 20,
    width: 70,
    height: 20,
    marginLeft: 30,
    borderRadius: 20,
  },
  buttonIcon: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
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
