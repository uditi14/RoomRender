import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";

export default function Header() {
  return (
    <View style={headerStyles.headerContainer}>
      <Image
        source={require("../assets/logo.png")}
        style={headerStyles.headerLogo}
      ></Image>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginTop: 45,
  },
  headerLogo: {
    width: 250,
    height: 65,
  },
});
