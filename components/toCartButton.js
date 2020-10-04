import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import App from "../App";
import Checkout from "../screens/Checkout";

export default function ToCartButton(props) {
  let count = 0;
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Checkout", props.item);
        }}
        style={styles.toCartButton}
      >
        <View>
          <Image
            source={require("../assets/img_155927.png")}
            style={styles.buttonIcon}
          />
        </View>
      </TouchableOpacity>
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
    marginTop: 10,
    height: 30,
    width: 30,
  },
});
