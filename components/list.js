import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function List(props) {
  console.log(props);
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        alignSelf: "center",
      }}
    >
      <Text style={styles.text}>
        {props != undefined ? props.item.name : ""}{" "}
      </Text>
      <Text style={styles.text}>
        {props != undefined ? props.item.name : ""}
      </Text>
      <Text style={styles.text}>
        {" "}
        {props != undefined ? props.item.price : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 10,
  },
});
