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
    <TouchableOpacity>
      <View style={styles.productView}>
        <Image
          source={require("../assets/purepng.com-cup-mug-coffeecupmugcoffeebean-1411527408162tgys6.png")}
          style={{
            marginTop: 50,
            alignSelf: "center",
            height: 102,
            width: 136,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productView: {
    backgroundColor: "#DFA75E",
    //  padding: 140,
    height: 150,
    width: 400,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    margin: 50,
  },
});
