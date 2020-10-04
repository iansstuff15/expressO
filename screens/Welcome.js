import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import Home from "./Home";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.mainview}>
      <View style={styles.viewFlex}>
        <Image
          source={require("../assets/logo.png")}
          style={(styles.logo, { height: 420, width: 420 })}
        />
      </View>
      <View style={[styles.viewFlex, styles.lowerView, { flex: 1.5 }]}>
        <View style={styles.mottoContainer}>
          <Text style={styles.mottoText}>Fresh Coffee</Text>
          <Text style={styles.mottoText}>at your</Text>
          <Text style={styles.mottoText}>Doorstep</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Home);
          }}
        >
          <View style={styles.button}>
            <View style={styles.items}>
              <Text style={[styles.inButtonText, styles.margin]}>ORDER</Text>
              <Image
                source={require("../assets/img_1333941.png")}
                style={[styles.margin, { height: 52, width: 57 }]}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: "#DFA75E",
    flex: 1,
  },
  viewFlex: {
    //flex: 1,
  },
  lowerView: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  button: {
    backgroundColor: "#402503",
    padding: 10,
    borderRadius: 50,
    height: 70,
    width: 260,
    alignItems: "flex-end",
    alignSelf: "center",
  },
  inButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 30,
  },
  items: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    margin: 15,
  },
  mottoText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  mottoContainer: {
    marginVertical: 70,
    marginHorizontal: 50,
  },
  logo: {
    alignSelf: "center",
    marginRight: -10,
  },
});
