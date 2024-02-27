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

export default function ProductInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/living_room.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        {/* Title, description, dimensions, and price */}
        <Text style={styles.title}>Beige 3-Seater Sofa</Text>
        <Text style={styles.description}>
          A comfortable and spacious 3 seater sofa made of the finest cloth and
          base materials. A comfortable and spacious 3 seater sofa made of the
          finest cloth and base materials.
        </Text>
        <Text style={styles.dimensions}>Dimensions:100*60*87</Text>
        <Text style={styles.price}>Price: Rs.20,000</Text>
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
          onPress={() => Linking.openURL("https://www.google.com/")}
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
