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

import { withNavigation } from "react-navigation";
import ProductInfo from "../screens/ProductInfo";

export default function ProductView(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(props.item);
        props.navigation.navigate("ProductInfo", props.item);
      }}
    >
      {console.log(props.item)}
      <View style={styles.productView}>
        <Image
          source={props.item.image}
          style={{
            marginTop: 70,
            alignSelf: "center",
            height: 152,
            width: 206,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
//

const styles = StyleSheet.create({
  productView: {
    backgroundColor: "#DFA75E",
    //  padding: 140,
    height: 270,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
