import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import ToCartButton from "./toCartButton";
export default function PriceToCartButton(props) {
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          padding: 10,
          alignSelf: "flex-end",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          {props.price}
        </Text>
        <ToCartButton navigation={props.navigation} item={props.item} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toCartButton: {
    backgroundColor: "#402503",

    width: 100,
    height: 30,

    borderRadius: 20,
  },
  buttonIcon: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
