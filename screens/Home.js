import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Card from "../components/card";
import Cart from "../components/cart";
import ImageComp from "../components/image";
import ProductInfo from "./ProductInfo";
import More from "../components/More";

export default function Home({ navigation, route }) {
  const [count, add] = useState({ count: route.params.cart });

  const [data, setData] = useState([
    {
      name: "Café Breve",
      price: "$45",
      volume: "12oz",
      description:
        "Cafè breve a espresso-based drink that's made like a cappuccino, but with steamed half-and-half instead of milk",
      image: require("../assets/Brevee.png"),
      key: 1,
    },
    {
      name: "Café Macchiato",
      price: "$40",
      volume: "12oz",
      description:
        "Cafè macchiato a espresso coffee drink with a small amount of milk, usually foamed.",
      image: require("../assets/CafeMacchiato.png"),
      key: 2,
    },
    {
      name: "Cappuccino",
      price: "$35",
      volume: "12oz",
      description:
        "Cappuccino a single espresso shot and hot milk, with the surface topped with foamed milk.",
      image: require("../assets/Cappucino.png"),
      key: 3,
    },
    {
      name: "Espresso",
      price: "$25",
      volume: "12oz",
      description: "Espresso is a roasted coffee bean drink",
      image: require("../assets/Espresso.png"),
      key: 4,
    },
    {
      name: "Café Mocha",
      price: "$50",
      volume: "12oz",
      description: "Café mocha a mixed drink with chocolate and coffee.",
      image: require("../assets/Mocha.png"),
      key: 5,
    },
    {
      name: "Green Tea",
      price: "$20",
      volume: "12oz",
      description:
        "Tea made from unfermented leaves that is pale in color and slightly bitter in flavor",
      image: require("../assets/GreenTea.png"),
      key: 6,
    },
    {
      name: "Ristretto",
      price: "$35",
      volume: "12oz",
      description: "Ristretto a more highly concentrated espresso coffee.",
      image: require("../assets/Ristrettoo.png"),
      key: 7,
    },
    {
      name: "Yuanyang Coffee",
      price: "$55",
      volume: "12oz",
      description: "Yuanyang a mixture of coffee and Hong Kong-style milk tea.",
      image: require("../assets/YuanyangCoffee.png"),
      key: 8,
    },

    {
      name: "Frappuccino",
      price: "$70",
      volume: "12oz",
      description:
        "Frappe is an iced beverage that has been shaken, blended or beaten that has a cream on top.",
      image: require("../assets/Frappocinno.png"),
      key: 9,
    },
    {
      name: "Irish Coffee",
      price: "$65",
      volume: "12oz",
      description:
        "Coffee mixed with a dash of Irish whiskey and served with cream on top.",
      image: require("../assets/IrishCoffee.png"),

      key: 10,
    },
    {
      name: "Iced Coffee",
      price: "$35",
      volume: "12oz",
      description: "Iced coffee is a coffee served chilled.",
      image: require("../assets/IcedCoffeee.png"),
      key: 11,
    },
    {
      name: "Tearone",
      price: "$90",
      volume: "123oz",
      description:
        "The beverage that will make you handsome in as instant as an instant coffee",
      image: require("../assets/Tearone.png"),
      key: 12,
    },
  ]);
  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <View>
        <ImageComp navigation={navigation} />
      </View>

      <Text style={[styles.textTitle, { fontSize: 40, marginTop: 20 }]}>
        PICK YOUR
      </Text>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.textTitle, { fontSize: 70 }]}>DRINK</Text>
          <More navigation={navigation} data={data} />
        </View>

        <FlatList
          style={{ padding: 50 }}
          data={data}
          renderItem={({ item }) => (
            <Card
              image={item.image}
              name={item.name}
              price={item.price}
              navigation={navigation}
              item={item}
            />
          )}
          horizontal={true}
        />
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <Cart navigation={navigation} data={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    marginLeft: 40,
  },
  cartButton: {
    backgroundColor: "#402503",
    padding: 30,
    width: 120,
    height: 100,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
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
