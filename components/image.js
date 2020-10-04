import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import Profile from "../screens/Profile";
import ProductInfo from "../screens/ProductInfo";

export default function ImageComp({ navigation }) {
  return (
    <View style={styles.image}>
      <TouchableOpacity onPress={() => navigation.navigate(Profile)}>
        <Image
          source={require("../assets/Ellipse2.png")}
          style={{ height: 50, width: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 60,
    marginLeft: 20,
  },
});
