import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProductView() {
  return (
    <TouchableOpacity onPress={() => console.log("pic pressed")}>
      <View style={styles.productView}>
        <Image
          source={require("../assets/purepng.com-cup-mug-coffeecupmugcoffeebean-1411527408162tgys6.png")}
          style={{ alignSelf: "center" }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productView: {
    backgroundColor: "#DFA75E",

    height: 100,
    width: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
