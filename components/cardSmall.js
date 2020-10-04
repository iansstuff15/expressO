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
import ProductView from "./producView";
import PriceToCartButton from "./price-toCardButton";

export default function Card(props) {
  return (
    <View style={[styles.card, styles.shadow]}>
      <ProductView
        navigation={props.navigation}
        name={props.name}
        item={props.item}
      />

      <View style={styles.lowerView}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            marginTop: -0,
            marginLeft: 10,
          }}
        >
          {props.name}
        </Text>
        <View>
          <PriceToCartButton
            price={props.price}
            navigation={props.navigation}
            item={props.item}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  card: {
    flex: 1,
    height: 400,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    margin: 10,
    backgroundColor: "#ffffff",
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
  lowerView: { height: 100, width: 300 },
});
