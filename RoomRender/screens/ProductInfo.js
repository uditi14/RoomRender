import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
} from "react-native";
import colors from "../utils/colors";

export default function ProductInfo({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        {/* Title, description, dimensions, and price */}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.dimensions}>
          {item.dimensions.width} * {item.dimensions.height} *{" "}
          {item.dimensions.depth}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* View in my room and Buy buttons */}
        <Pressable
          style={styles.button}
          onPress={() => console.log("View in my room")}
        >
          <Text style={styles.buttonText}>View in my room</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL(item.link)}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.bg,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: "90%",
    height: "100%",
    borderRadius: 20,
  },
  infoContainer: {
    marginHorizontal: "10%", // 10% margin from left and right
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.cream,
  },
  description: {
    fontSize: 16,
    marginBottom: 7,
    color: colors.cream,
  },
  dimensions: {
    fontSize: 16,
    marginBottom: 7,
    color: colors.cream,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 35, // Additional margin for spacing
    color: colors.cream,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "2%",
    marginBottom: 20, // Additional margin for spacing
  },
  button: {
    flex: 1,
    backgroundColor: colors.buttongray,
    borderRadius: 15, // Rounded button look
    paddingVertical: 15,
    marginHorizontal: 5, // Space between buttons
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
