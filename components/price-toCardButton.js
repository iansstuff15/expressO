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
          flexDirection: "row",
          padding: 20,
          alignSelf: "flex-end",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            marginRight: 70,
            justifyContent: "center",
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

    width: 120,
    height: 50,

    borderRadius: 20,
  },
  buttonIcon: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
