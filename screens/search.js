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

import Card from "../components/cardSmall";
import Cart from "../components/cart";
import ImageComp from "../components/image";
import { Searchbar } from "react-native-paper";

export default function Search({ route, navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      {console.log(route.params)}

      <View>
        <FlatList
          style={{ padding: 30 }}
          data={route.params}
          renderItem={({ item }) => (
            <Card
              image={item.image}
              name={item.name}
              price={item.price}
              navigation={navigation}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    marginLeft: 40,
  },
});
